CREATE TABLE IF NOT EXISTS public.budgets (
    id UUID NOT NULL DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL,

    name VARCHAR(150) NOT NULL,

    amount NUMERIC(15, 2) NOT NULL
        CHECK (amount >= 0),

    period_type VARCHAR(20) NOT NULL
        CHECK (
            period_type IN (
                'monthly',
                'weekly',
                'yearly',
                'custom'
            )
        ),

    start_date DATE NOT NULL,

    end_date DATE,

    is_active BOOLEAN NOT NULL DEFAULT true,

    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT budgets_pkey
        PRIMARY KEY (id),

    CONSTRAINT budgets_user_id_fkey
        FOREIGN KEY (user_id)
        REFERENCES public.users (id)
        ON UPDATE NO ACTION
        ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_budgets_dates
    ON public.budgets (user_id, start_date, end_date);

CREATE INDEX IF NOT EXISTS idx_budgets_user_id
    ON public.budgets (user_id);