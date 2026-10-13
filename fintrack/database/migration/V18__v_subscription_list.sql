



DROP VIEW IF EXISTS public.v_subscription_list;

CREATE OR REPLACE VIEW public.v_subscription_list AS
 SELECT s.id,
    s.user_id,
    s.merchant AS service,
    c.name AS category,
    s.amount,
    s.billing_cycle,
    s.next_billing_date,
        CASE
            WHEN s.is_active THEN 'Active'::text
            ELSE 'Inactive'::text
        END AS status,
    s.icon,
    s.created_at,
    s.updated_at
   
FROM (subscriptions s
     LEFT JOIN categories c ON (((c.id = s.category_id) AND (c.user_id = s.user_id))));

