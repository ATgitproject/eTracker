CREATE TABLE IF NOT EXISTS public.transactions (
    id UUID NOT NULL DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,

    transaction_type VARCHAR(20) NOT NULL
        CHECK (transaction_type IN ('income', 'expense', 'transfer')),

    amount NUMERIC(15, 2) NOT NULL
        CHECK (amount > 0),

    description VARCHAR(255) NOT NULL,
    category_id UUID,
    payment_method VARCHAR(50),
    merchant VARCHAR(150),

    transaction_date TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    notes TEXT,

    is_recurring BOOLEAN NOT NULL DEFAULT false,

    recurring_transaction_id UUID,
    reference_id VARCHAR(100),

    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT transactions_pkey PRIMARY KEY (id),

    CONSTRAINT transactions_user_id_fkey
        FOREIGN KEY (user_id)
        REFERENCES public.users (id)
        ON UPDATE NO ACTION
        ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_transactions_category
    ON public.transactions (category_id);

CREATE INDEX IF NOT EXISTS idx_transactions_date
    ON public.transactions (transaction_date);

CREATE INDEX IF NOT EXISTS idx_transactions_merchant
    ON public.transactions (merchant);

CREATE INDEX IF NOT EXISTS idx_transactions_type
    ON public.transactions (transaction_type);

CREATE INDEX IF NOT EXISTS idx_transactions_user_date
    ON public.transactions (user_id, transaction_date);

CREATE INDEX IF NOT EXISTS idx_transactions_user_id
    ON public.transactions (user_id);