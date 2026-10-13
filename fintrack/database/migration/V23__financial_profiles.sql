CREATE TABLE IF NOT EXISTS public.financial_profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL UNIQUE
        REFERENCES public.users(id) ON DELETE CASCADE,
    monthly_income NUMERIC(15, 2) NOT NULL DEFAULT 0
        CHECK (monthly_income >= 0),
    spending_limit NUMERIC(15, 2) NOT NULL DEFAULT 0
        CHECK (spending_limit >= 0),
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);