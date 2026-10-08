CREATE TABLE IF NOT EXISTS public.subscriptions (
    id UUID NOT NULL DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL,

    name VARCHAR(150) NOT NULL,

    merchant VARCHAR(150),

    category_id UUID,

    amount NUMERIC(15, 2) NOT NULL
        CHECK (amount >= 0),

    billing_cycle VARCHAR(20) NOT NULL
        CHECK (
            billing_cycle IN (
                'weekly',
                'monthly',
                'quarterly',
                'yearly'
            )
        ),

    next_billing_date DATE,

    payment_method VARCHAR(50),

    is_active BOOLEAN NOT NULL DEFAULT true,

    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT subscriptions_pkey
        PRIMARY KEY (id),

    CONSTRAINT subscriptions_category_id_fkey
        FOREIGN KEY (category_id)
        REFERENCES public.categories (id)
        ON UPDATE NO ACTION
        ON DELETE SET NULL,

    CONSTRAINT subscriptions_user_id_fkey
        FOREIGN KEY (user_id)
        REFERENCES public.users (id)
        ON UPDATE NO ACTION
        ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_subscriptions_next_billing
    ON public.subscriptions (user_id, next_billing_date);

CREATE INDEX IF NOT EXISTS idx_subscriptions_user
    ON public.subscriptions (user_id);