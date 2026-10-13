





DROP TABLE IF EXISTS public.transactions;

CREATE TABLE public.transactions
	(
	  id                       UUID NOT NULL DEFAULT gen_random_uuid()
	, user_id                  UUID NOT NULL
	, amount                   NUMERIC(15,2) NOT NULL CHECK (amount > 0)
	, transaction_type         VARCHAR (20) NOT NULL
	, description              VARCHAR (255) NOT NULL
	, category_id              UUID
	, payment_method           VARCHAR (50)
	, merchant                 VARCHAR (150)
	, icon                     VARCHAR (100)
	, color                    VARCHAR (20)
	, transaction_date         TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
	, notes                    TEXT
	, is_recurring             BOOL NOT NULL DEFAULT false
	, recurring_transaction_id UUID
	, reference_id             VARCHAR (100)
	, created_at               TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
	, updated_at               TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
	, CONSTRAINT transactions_pkey PRIMARY KEY (id)
	)
	WITH (OIDS = FALSE);

CREATE INDEX idx_transactions_category ON public.transactions USING btree (category_id);

CREATE INDEX idx_transactions_date ON public.transactions USING btree (transaction_date);

CREATE INDEX idx_transactions_merchant ON public.transactions USING btree (merchant);

CREATE INDEX idx_transactions_type ON public.transactions USING btree (transaction_type);

CREATE INDEX idx_transactions_user_date ON public.transactions USING btree (user_id, transaction_date);

CREATE INDEX idx_transactions_user_id ON public.transactions USING btree (user_id);