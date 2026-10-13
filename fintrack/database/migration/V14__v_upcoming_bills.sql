



DROP VIEW IF EXISTS public.v_upcoming_bills;

CREATE OR REPLACE VIEW public.v_upcoming_bills AS
 SELECT s.id,
    s.user_id,
    s.name AS description,
    s.merchant,
    s.category_id,
    c.name AS category,
    s.amount,
    s.next_billing_date AS due_date,
    s.payment_method,
    s.billing_cycle,
    c.icon,
    c.color,
        CASE
            WHEN (s.next_billing_date < CURRENT_DATE) THEN 'overdue'::text
            WHEN (s.next_billing_date = CURRENT_DATE) THEN 'due_today'::text
            ELSE 'upcoming'::text
        END AS bill_status
   
FROM (subscriptions s
     LEFT JOIN categories c ON ((c.id = s.category_id)))
  WHERE ((s.is_active = true) AND (s.next_billing_date IS NOT NULL) AND (s.next_billing_date <= (CURRENT_DATE + '30 days'::interval)));



