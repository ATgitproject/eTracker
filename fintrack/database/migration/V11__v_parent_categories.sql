


DROP VIEW IF EXISTS public.v_parent_categories;

CREATE OR REPLACE VIEW public.v_parent_categories AS
 SELECT id,
    user_id,
    parent_category_id,
    name,
    category_type,
    icon,
    color,
    category_level,
    is_system,
    is_active,
    created_at,
    updated_at
   
FROM categories
  WHERE (parent_category_id IS NULL);