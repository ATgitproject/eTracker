

CREATE VIEW public.v_category_summary AS
SELECT
    c.id,
    c.user_id,
    c.icon,
    c.color,
    c.name                           AS category_name,
    c.category_type,
    COUNT(t.id)::int                 AS transaction_count,
    COALESCE(SUM(t.amount), 0)       AS total_amount,
    c.is_active,
    CASE WHEN c.is_active THEN 'Active' ELSE 'Inactive' END AS status
FROM public.categories c
LEFT JOIN public.categories ch
       ON ch.id = c.id
       OR ch.parent_category_id = c.id
LEFT JOIN public.transactions t
       ON t.category_id = ch.id
WHERE c.parent_category_id IS NULL
GROUP BY c.id, c.user_id, c.icon, c.color, c.name, c.category_type, c.is_active;