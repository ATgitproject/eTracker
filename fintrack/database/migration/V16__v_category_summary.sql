

DROP VIEW IF EXISTS public.v_category_summary;

CREATE OR REPLACE VIEW public.v_category_summary AS
 SELECT c.id,
    c.user_id,
    c.icon,
    c.color,
    c.name AS category_name,
    c.category_type,
    (count(t.id))::integer AS transaction_count,
    COALESCE(sum(t.amount), (0)::numeric) AS total_amount,
    c.is_active,
        CASE
            WHEN c.is_active THEN 'Active'::text
            ELSE 'Inactive'::text
        END AS status
   
FROM ((categories c
     LEFT JOIN categories ch ON (((ch.id = c.id) OR (ch.parent_category_id = c.id))))
     LEFT JOIN transactions t ON ((t.category_id = ch.id)))
  WHERE (c.parent_category_id IS NULL)
  GROUP BY c.id, c.user_id, c.icon, c.color, c.name, c.category_type, c.is_active;

