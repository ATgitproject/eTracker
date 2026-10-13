

DROP VIEW IF EXISTS public.v_budget_tiles;

CREATE OR REPLACE VIEW public.v_budget_tiles AS
 SELECT user_id,
    count(*) FILTER (WHERE (is_active = true)) AS active_budgets,
    count(*) FILTER (WHERE ((is_active = true) AND (start_date <= CURRENT_DATE) AND (end_date >= CURRENT_DATE))) AS current_budgets,
    COALESCE(min((end_date - CURRENT_DATE)) FILTER (WHERE ((is_active = true) AND (start_date <= CURRENT_DATE) AND (end_date >= CURRENT_DATE))), 0) AS days_left,
    count(*) FILTER (WHERE ((is_active = true) AND (end_date < CURRENT_DATE))) AS overdue_budgets
   
FROM budgets b
  GROUP BY user_id;
