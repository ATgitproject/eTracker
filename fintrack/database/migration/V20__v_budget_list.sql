


DROP VIEW IF EXISTS public.v_budget_list;

CREATE OR REPLACE VIEW public.v_budget_list AS
 SELECT 
    b.id, 
    bc.id AS budget_category_id,
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

