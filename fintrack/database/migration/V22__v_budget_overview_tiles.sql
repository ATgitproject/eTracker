CREATE OR REPLACE VIEW public.v_budget_overview_tiles AS
SELECT
    user_id,
    COALESCE(SUM(budget_amount), 0)::NUMERIC(15, 2)
        AS total_budget,
    COALESCE(SUM(spent_amount), 0)::NUMERIC(15, 2)
        AS total_spent,
    (
        COALESCE(SUM(budget_amount), 0)
        - COALESCE(SUM(spent_amount), 0)
    )::NUMERIC(15, 2) AS remaining_balance,
    CASE
        WHEN COALESCE(SUM(budget_amount), 0) > 0
        THEN ROUND(
            COALESCE(SUM(spent_amount), 0) * 100.0
            / SUM(budget_amount),
            2
        )
        ELSE 0
    END AS percentage_used
FROM public.v_monthly_budget_vs_actual
GROUP BY user_id;