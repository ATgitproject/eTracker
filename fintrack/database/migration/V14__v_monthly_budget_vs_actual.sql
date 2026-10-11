




DROP VIEW IF EXISTS public.v_monthly_budget_vs_actual;
 
CREATE OR REPLACE VIEW public.v_monthly_budget_vs_actual AS
SELECT bc.id,
    b.id AS budget_id,
    b.user_id,
    b.name AS budget_name,
    bc.category_id,
    c.name AS category_name,
    c.icon AS category_icon,
    c.color AS category_color,
    b.start_date,
    b.end_date,
    bc.amount AS budget_amount,
    COALESCE(spent.total_spent, (0)::numeric) AS spent_amount,
    GREATEST((bc.amount - COALESCE(spent.total_spent, (0)::numeric)), (0)::numeric) AS remaining_amount,
        CASE
            WHEN (bc.amount > (0)::numeric) THEN round(((COALESCE(spent.total_spent, (0)::numeric) * 100.0) / bc.amount), 1)
            ELSE (0)::numeric
        END AS percentage_used
FROM (((budgets b
     JOIN budget_categories bc ON ((bc.budget_id = b.id)))
     JOIN categories c ON ((c.id = bc.category_id)))
     LEFT JOIN LATERAL ( SELECT sum(t.amount) AS total_spent
FROM transactions t
          WHERE ((t.user_id = b.user_id) AND (t.category_id = bc.category_id) AND (lower((t.transaction_type)::text) = 'expense'::text) AND (t.transaction_date >= b.start_date) AND (t.transaction_date <= COALESCE(b.end_date, CURRENT_DATE)))) spent ON (true))
  WHERE (b.is_active = true);