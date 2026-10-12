CREATE OR REPLACE VIEW public.v_subscription_summary AS
SELECT
    s.id,
    s.user_id,
    s.name AS service,
    c.name AS category,
    s.amount,
    s.billing_cycle,
    s.next_billing_date,
    s.status,
    s.is_active,
    s.created_at,
    s.updated_at
FROM public.subscriptions s
LEFT JOIN public.categories c
    ON c.id = s.category_id
   AND c.user_id = s.user_id;