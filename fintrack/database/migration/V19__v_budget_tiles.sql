
CREATE OR REPLACE VIEW public.v_budget_tiles AS
SELECT
    b.user_id,

    COUNT(*) FILTER (
        WHERE b.is_active = TRUE
    ) AS active_budgets,

    COUNT(*) FILTER (
        WHERE b.is_active = TRUE
          AND b.start_date <= CURRENT_DATE
          AND b.end_date >= CURRENT_DATE
    ) AS current_budgets,

    COALESCE(
        MIN(b.end_date - CURRENT_DATE) FILTER (
            WHERE b.is_active = TRUE
              AND b.start_date <= CURRENT_DATE
              AND b.end_date >= CURRENT_DATE
        ),
        0
    ) AS days_left,

    COUNT(*) FILTER (
        WHERE b.is_active = TRUE
          AND b.end_date < CURRENT_DATE
    ) AS overdue_budgets

FROM public.budgets b
GROUP BY b.user_id;