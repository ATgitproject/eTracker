

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
          WHERE ((t.user_id = b.user_id) AND (t.category_id = bc.category_id) AND (lower((t.transaction_type)::text) = 'Expense'::text) AND (t.transaction_date >= b.start_date) AND (t.transaction_date <= COALESCE(b.end_date, CURRENT_DATE)))) spent ON (true))
  WHERE (b.is_active = true)
  GROUP BY b.user_id;

