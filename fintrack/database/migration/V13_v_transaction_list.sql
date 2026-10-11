

CREATE OR REPLACE VIEW public.v_transaction_list AS
SELECT t.id,
    t.user_id,
    t.transaction_type,
    t.amount,
    t.description,
    t.payment_method,
    t.merchant,
    t.transaction_date AS transaction_data,
    c.name AS category_name,
    t.icon,
    t.color
FROM (transactions t
     LEFT JOIN categories c ON ((t.category_id = c.id)));