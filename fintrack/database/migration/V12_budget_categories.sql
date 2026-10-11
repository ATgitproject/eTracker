

CREATE TABLE IF NOT EXISTS public.budget_categories (
    id UUID NOT NULL DEFAULT gen_random_uuid(),
    budget_id UUID NOT NULL,
    category_id UUID NOT NULL,
    amount NUMERIC(15, 2) NOT NULL DEFAULT 0
        CHECK (amount >= 0),
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
 
    CONSTRAINT budget_categories_pkey PRIMARY KEY (id),
 
    CONSTRAINT budget_categories_budget_id_fkey
        FOREIGN KEY (budget_id)
        REFERENCES public.budgets (id)
        ON DELETE CASCADE,
 
    CONSTRAINT budget_categories_category_id_fkey
        FOREIGN KEY (category_id)
        REFERENCES public.categories (id)
        ON DELETE CASCADE,
 
    CONSTRAINT budget_categories_budget_category_unique
        UNIQUE (budget_id, category_id)
);
 
CREATE INDEX IF NOT EXISTS idx_budget_categories_budget_id
    ON public.budget_categories (budget_id);