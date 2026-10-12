DELETE FROM public.subscriptions
WHERE id = 'C1000000-0000-4000-8000-000000000001';

DELETE FROM public.subscriptions
WHERE id = 'C1000000-0000-4000-8000-000000000002';

DELETE FROM public.subscriptions
WHERE id = 'C1000000-0000-4000-8000-000000000003';

DELETE FROM public.subscriptions
WHERE id = 'C1000000-0000-4000-8000-000000000004';

DELETE FROM public.subscriptions
WHERE id = '4222F7AC-60AC-47B2-B0B2-3449858989EB';

DELETE FROM public.subscriptions
WHERE id = 'F6FF82A5-202F-4877-B22C-ACAC1CEED927';

DELETE FROM public.subscriptions
WHERE id = '3ECC97DA-49D9-4527-9825-77C283702CA5';

DELETE FROM public.subscriptions
WHERE id = '25DDCA2C-3B1D-4A79-9360-422B6149030C';

INSERT INTO public.subscriptions (id, user_id, name, merchant, category_id, amount, billing_cycle, next_billing_date, payment_method, is_active, created_at, updated_at, status, icon)
VALUES ('4222F7AC-60AC-47B2-B0B2-3449858989EB', 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD', 'Crunchyroll', 'Crunchyroll', 'A1000000-0000-4000-8000-000000000003', 99, 'monthly', '2026-11-12', 'UPI', '1', '2026-10-12 23:41:00.744574', '2026-10-12 23:41:00.744574', 'active', 'crunchyroll');

INSERT INTO public.subscriptions (id, user_id, name, merchant, category_id, amount, billing_cycle, next_billing_date, payment_method, is_active, created_at, updated_at, status, icon)
VALUES ('F6FF82A5-202F-4877-B22C-ACAC1CEED927', 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD', 'YouTube Premium', 'YouTube', 'A1000000-0000-4000-8000-000000000003', 149, 'monthly', '2026-11-15', 'UPI', '1', '2026-10-12 23:41:00.744574', '2026-10-12 23:41:00.744574', 'active', 'youtube');

INSERT INTO public.subscriptions (id, user_id, name, merchant, category_id, amount, billing_cycle, next_billing_date, payment_method, is_active, created_at, updated_at, status, icon)
VALUES ('3ECC97DA-49D9-4527-9825-77C283702CA5', 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD', 'Prime Video', 'Amazon Prime', 'A1000000-0000-4000-8000-000000000003', 1499, 'yearly', '2027-01-10', 'Credit Card', '1', '2026-10-12 23:41:00.744574', '2026-10-12 23:41:00.744574', 'active', 'prime');

INSERT INTO public.subscriptions (id, user_id, name, merchant, category_id, amount, billing_cycle, next_billing_date, payment_method, is_active, created_at, updated_at, status, icon)
VALUES ('25DDCA2C-3B1D-4A79-9360-422B6149030C', 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD', 'Google One', 'Google', 'A1000000-0000-4000-8000-000000000003', 130, 'monthly', '2026-11-20', 'UPI', '1', '2026-10-12 23:41:00.744574', '2026-10-12 23:41:00.744574', 'active', 'googleone');


DROP VIEW IF EXISTS public.v_subscription_list;

CREATE OR REPLACE VIEW public.v_subscription_list AS
 SELECT s.id,
    s.user_id,
    s.merchant AS service,
    c.name AS category,
    s.amount,
    s.billing_cycle,
    s.next_billing_date,
    s.status,
    s.icon,
    s.is_active,
    s.created_at,
    s.updated_at
   
FROM (subscriptions s
     LEFT JOIN categories c ON (((c.id = s.category_id) AND (c.user_id = s.user_id))));

UPDATE public.subscriptions
SET icon = 'Crunchyroll'
WHERE id = '4222F7AC-60AC-47B2-B0B2-3449858989EB';


UPDATE public.subscriptions
SET status = 'Active'
WHERE id = 'F6FF82A5-202F-4877-B22C-ACAC1CEED927';

UPDATE public.subscriptions
SET status = 'Active'
WHERE id = '3ECC97DA-49D9-4527-9825-77C283702CA5';

UPDATE public.subscriptions
SET status = 'Active'
WHERE id = '25DDCA2C-3B1D-4A79-9360-422B6149030C';

UPDATE public.subscriptions
SET status = 'Active'
WHERE id = '4222F7AC-60AC-47B2-B0B2-3449858989EB';

