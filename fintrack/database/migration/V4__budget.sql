

DROP TABLE IF EXISTS public.budgets CASCADE;

CREATE TABLE public.budgets (
    id          UUID          NOT NULL DEFAULT gen_random_uuid(),
    user_id     UUID          NOT NULL,
    name        VARCHAR(150)  NOT NULL,
    amount      NUMERIC(15,2) NOT NULL CHECK (amount > 0),
    period_month VARCHAR(20)  NOT NULL,
    start_date  DATE          NOT NULL,
    end_date    DATE          NOT NULL,
    is_active   BOOLEAN       NOT NULL DEFAULT true,
    created_at  TIMESTAMPTZ   NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at  TIMESTAMPTZ   NOT NULL DEFAULT CURRENT_TIMESTAMP,
    category_id UUID,
    CONSTRAINT budgets_pkey PRIMARY KEY (id),
    CONSTRAINT budgets_user_id_fkey
        FOREIGN KEY (user_id) REFERENCES public.users (id)
        ON UPDATE NO ACTION ON DELETE CASCADE
);

CREATE INDEX idx_budgets_dates   ON public.budgets USING btree (user_id, start_date, end_date);
CREATE INDEX idx_budgets_user_id ON public.budgets USING btree (user_id);