


DROP VIEW IF EXISTS public.v_spending_trend;

CREATE OR REPLACE VIEW public.v_spending_trend AS
 SELECT user_id,
    (transaction_date)::date AS date,
    (sum(amount))::numeric(15,2) AS amount
   
FROM transactions t
  WHERE (((transaction_type)::text = 'Expense'::text) AND (transaction_date >= (date_trunc('month'::text, (CURRENT_DATE)::timestamp with time zone))::date) AND (transaction_date < ((date_trunc('month'::text, (CURRENT_DATE)::timestamp with time zone) + '1 mon'::interval))::date))
  GROUP BY user_id, ((transaction_date)::date);
