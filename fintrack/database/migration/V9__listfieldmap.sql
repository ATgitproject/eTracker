CREATE OR REPLACE VIEW public.v_transaction_summary AS
WITH transactions AS (
         SELECT transactions.user_id,
            date_trunc('month'::text, transactions.transaction_date) AS month,
            COALESCE(sum(
                CASE
                    WHEN ((transactions.transaction_type)::text = 'income'::text) THEN transactions.amount
                    ELSE (0)::numeric
                END), (0)::numeric) AS total_income,
            COALESCE(sum(
                CASE
                    WHEN ((transactions.transaction_type)::text = 'expense'::text) THEN transactions.amount
                    ELSE (0)::numeric
                END), (0)::numeric) AS total_expenses
FROM public.transactions
          WHERE (transactions.transaction_date >= (date_trunc('month'::text, (CURRENT_DATE)::timestamp with time zone) - '1 mon'::interval))
          GROUP BY transactions.user_id, (date_trunc('month'::text, transactions.transaction_date))
        ), current_month AS (
         SELECT transactions.user_id,
            transactions.total_income,
            transactions.total_expenses
FROM transactions
          WHERE (transactions.month = date_trunc('month'::text, (CURRENT_DATE)::timestamp with time zone))
        ), previous_month AS (
         SELECT transactions.user_id,
            transactions.total_income,
            transactions.total_expenses
FROM transactions
          WHERE (transactions.month = (date_trunc('month'::text, (CURRENT_DATE)::timestamp with time zone) - '1 mon'::interval))
        )
SELECT c.user_id,
    c.total_income,
    round(
        CASE
            WHEN (COALESCE(p.total_income, (0)::numeric) = (0)::numeric) THEN (
            CASE
                WHEN (c.total_income > (0)::numeric) THEN 100
                ELSE 0
            END)::numeric
            ELSE (((c.total_income - p.total_income) / p.total_income) * (100)::numeric)
        END, 2) AS total_income_percentage,
        CASE
            WHEN (c.total_income > COALESCE(p.total_income, (0)::numeric)) THEN 'Positive'::text
            WHEN (c.total_income < COALESCE(p.total_income, (0)::numeric)) THEN 'Negative'::text
            ELSE 'No Change'::text
        END AS total_income_trend,
    c.total_expenses,
    round(
        CASE
            WHEN (COALESCE(p.total_expenses, (0)::numeric) = (0)::numeric) THEN (
            CASE
                WHEN (c.total_expenses > (0)::numeric) THEN 100
                ELSE 0
            END)::numeric
            ELSE (((c.total_expenses - p.total_expenses) / p.total_expenses) * (100)::numeric)
        END, 2) AS total_expenses_percentage,
        CASE
            WHEN (c.total_expenses < COALESCE(p.total_expenses, (0)::numeric)) THEN 'Positive'::text
            WHEN (c.total_expenses > COALESCE(p.total_expenses, (0)::numeric)) THEN 'Negative'::text
            ELSE 'No Change'::text
        END AS total_expenses_trend,
    (c.total_income - c.total_expenses) AS remaining_balance,
    round(
        CASE
            WHEN ((COALESCE(p.total_income, (0)::numeric) - COALESCE(p.total_expenses, (0)::numeric)) = (0)::numeric) THEN (
            CASE
                WHEN ((c.total_income - c.total_expenses) > (0)::numeric) THEN 100
                ELSE 0
            END)::numeric
            ELSE ((((c.total_income - c.total_expenses) - (COALESCE(p.total_income, (0)::numeric) - COALESCE(p.total_expenses, (0)::numeric))) / (COALESCE(p.total_income, (0)::numeric) - COALESCE(p.total_expenses, (0)::numeric))) * (100)::numeric)
        END, 2) AS remaining_balance_percentage,
        CASE
            WHEN ((c.total_income - c.total_expenses) > (COALESCE(p.total_income, (0)::numeric) - COALESCE(p.total_expenses, (0)::numeric))) THEN 'Positive'::text
            WHEN ((c.total_income - c.total_expenses) < (COALESCE(p.total_income, (0)::numeric) - COALESCE(p.total_expenses, (0)::numeric))) THEN 'Negative'::text
            ELSE 'No Change'::text
        END AS remaining_balance_trend,
    (c.total_income - c.total_expenses) AS total_saving,
    round(
        CASE
            WHEN ((COALESCE(p.total_income, (0)::numeric) - COALESCE(p.total_expenses, (0)::numeric)) = (0)::numeric) THEN (
            CASE
                WHEN ((c.total_income - c.total_expenses) > (0)::numeric) THEN 100
                ELSE 0
            END)::numeric
            ELSE ((((c.total_income - c.total_expenses) - (COALESCE(p.total_income, (0)::numeric) - COALESCE(p.total_expenses, (0)::numeric))) / (COALESCE(p.total_income, (0)::numeric) - COALESCE(p.total_expenses, (0)::numeric))) * (100)::numeric)
        END, 2) AS total_saving_percentage,
        CASE
            WHEN ((c.total_income - c.total_expenses) > (COALESCE(p.total_income, (0)::numeric) - COALESCE(p.total_expenses, (0)::numeric))) THEN 'Positive'::text
            WHEN ((c.total_income - c.total_expenses) < (COALESCE(p.total_income, (0)::numeric) - COALESCE(p.total_expenses, (0)::numeric))) THEN 'Negative'::text
            ELSE 'No Change'::text
        END AS total_saving_trend
FROM (current_month c
     LEFT JOIN previous_month p ON ((c.user_id = p.user_id)));
 