

DROP VIEW IF EXISTS public.v_budget_overview_tiles;

CREATE OR REPLACE VIEW public.v_budget_overview_tiles AS
 SELECT b.user_id,
    (COALESCE(sum(bc.amount), (0)::numeric))::numeric(15,2) AS total_budget,
    (COALESCE(sum(spent.spent_amount), (0)::numeric))::numeric(15,2) AS total_spent,
    ((COALESCE(sum(bc.amount), (0)::numeric) - COALESCE(sum(spent.spent_amount), (0)::numeric)))::numeric(15,2) AS remaining_balance,
        CASE
            WHEN (COALESCE(sum(bc.amount), (0)::numeric) > (0)::numeric) THEN round(((COALESCE(sum(spent.spent_amount), (0)::numeric) * 100.0) / sum(bc.amount)), 2)
            ELSE (0)::numeric
        END AS percentage_used
   
FROM ((budgets b
     JOIN budget_categories bc ON ((bc.budget_id = b.id)))
     LEFT JOIN LATERAL ( SELECT COALESCE(sum(t.amount), (0)::numeric) AS spent_amount
           
FROM transactions t
          WHERE ((t.user_id = b.user_id) AND (t.category_id = bc.category_id) AND (lower((t.transaction_type)::text) = 'expense'::text) AND (t.transaction_date >= b.start_date) AND (t.transaction_date <= COALESCE(b.end_date, CURRENT_DATE)))) spent ON (true))
  WHERE (b.is_active = true)
  GROUP BY b.user_id;


DROP VIEW IF EXISTS public.v_monthly_budget_vs_actual;

CREATE OR REPLACE VIEW public.v_monthly_budget_vs_actual AS
SELECT
    bc.id,
    b.id AS budget_id,
    b.user_id,

    bc.category_id,
    c.name AS category_name,
    c.icon AS category_icon,
    c.color AS category_color,

    b.start_date,
    b.end_date,

    bc.amount AS budget_amount,

    COALESCE(spent.total_spent, 0::numeric) AS spent_amount,

    GREATEST(
        bc.amount - COALESCE(spent.total_spent, 0::numeric),
        0::numeric
    ) AS remaining_amount,

    CASE
        WHEN bc.amount > 0 THEN
            ROUND(
                COALESCE(spent.total_spent, 0::numeric)
                * 100.0 / bc.amount,
                1
            )
        ELSE 0::numeric
    END AS percentage_used

FROM public.budgets b

JOIN public.budget_categories bc
    ON bc.budget_id = b.id

JOIN public.categories c
    ON c.id = bc.category_id

LEFT JOIN LATERAL (
    SELECT
        SUM(t.amount) AS total_spent
    FROM public.transactions t
    WHERE t.user_id = b.user_id
      AND t.category_id = bc.category_id
      AND LOWER(t.transaction_type::text) = 'expense'
      AND t.transaction_date >= b.start_date
      AND t.transaction_date < (
          COALESCE(b.end_date, CURRENT_DATE) + INTERVAL '1 day'
      )
) spent ON TRUE

WHERE b.is_active = TRUE;


ALTER TABLE budgets 
ADD COLUMN IF NOT EXISTS category_id VARCHAR(255);

ALTER TABLE budgets 
DROP COLUMN IF EXISTS name;


DROP VIEW IF EXISTS public.v_budget_list;

CREATE OR REPLACE VIEW public.v_budget_list AS
 SELECT bc.id,
    b.id AS budget_id,
    b.user_id,
    bc.category_id,
    c.name AS category_name,
    c.icon AS category_icon,
    c.color AS category_color,
    b.start_date,
    b.end_date,
    b.period_type,
    bc.amount AS budget_amount,
    COALESCE(spent.total_spent, (0)::numeric) AS spent_amount,
    GREATEST((bc.amount - COALESCE(spent.total_spent, (0)::numeric)), (0)::numeric) AS remaining_amount,
        CASE
            WHEN (bc.amount > (0)::numeric) THEN round(((COALESCE(spent.total_spent, (0)::numeric) * 100.0) / bc.amount), 1)
            ELSE (0)::numeric
        END AS progress_percentage,
        CASE
            WHEN (b.is_active IS NOT TRUE) THEN 'Inactive'::text
            WHEN (COALESCE(spent.total_spent, (0)::numeric) > bc.amount) THEN 'Over Budget'::text
            WHEN (COALESCE(spent.total_spent, (0)::numeric) >= (bc.amount * 0.9)) THEN 'Near Limit'::text
            ELSE 'On Track'::text
        END AS status,
    b.is_active,
    b.created_at,
    b.updated_at
   
FROM (((budgets b
     JOIN budget_categories bc ON ((bc.budget_id = b.id)))
     JOIN categories c ON ((c.id = bc.category_id)))
     LEFT JOIN LATERAL ( SELECT sum(t.amount) AS total_spent
           
FROM transactions t
          WHERE ((t.user_id = b.user_id) AND (t.category_id = bc.category_id) AND (lower((t.transaction_type)::text) = 'expense'::text) AND (t.transaction_date >= b.start_date) AND (t.transaction_date < (COALESCE(b.end_date, CURRENT_DATE) + '1 day'::interval)))) spent ON (true))
  WHERE (b.is_active = true);

