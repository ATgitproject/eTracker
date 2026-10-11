

CREATE OR REPLACE VIEW public.v_parent_categories AS
SELECT *
FROM public.categories
WHERE parent_category_id IS NULL;