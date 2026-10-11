

CREATE OR REPLACE VIEW public.v_monthly_budget_vs_actual AS
SELECT
    bc.id AS id,                 -- Unique row ID for DataGrid
    b.id AS budget_id,            -- Parent budget ID
    b.user_id,
    b.name AS budget_name,
    bc.category_id,
    c.name AS category_name,
    c.icon AS category_icon,
    c.color AS category_color,
    b.start_date,
    b.end_date,
    bc.amount AS budget_amount,
    COALESCE(spent.total_spent, 0) AS spent_amount,
    GREATEST(
        bc.amount - COALESCE(spent.total_spent, 0),
        0
    ) AS remaining_amount,
    CASE
        WHEN bc.amount > 0 THEN
            ROUND(
                COALESCE(spent.total_spent, 0) * 100.0 / bc.amount,
                1
            )
        ELSE 0
    END AS percentage_used
FROM public.budgets b
JOIN public.budget_categories bc
    ON bc.budget_id = b.id
JOIN public.categories c
    ON c.id = bc.category_id
LEFT JOIN LATERAL (
    SELECT SUM(t.amount) AS total_spent
    FROM public.transactions t
    WHERE t.user_id = b.user_id
      AND t.category_id = bc.category_id
      AND LOWER(t.transaction_type) = 'expense'
      AND t.transaction_date >= b.start_date
      AND t.transaction_date <= COALESCE(b.end_date, CURRENT_DATE)
) spent ON TRUE
WHERE b.is_active = TRUE;