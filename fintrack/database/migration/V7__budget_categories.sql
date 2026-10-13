

DROP TABLE IF EXISTS public.budget_categories;

CREATE TABLE public.budget_categories
	(
	  id          UUID NOT NULL DEFAULT gen_random_uuid()
	, budget_id   UUID NOT NULL
	, category_id UUID NOT NULL
	, amount      NUMERIC(15,2) NOT NULL CHECK (amount > 0)
	, created_at  TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
	, updated_at  TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
	, CONSTRAINT budget_categories_pkey PRIMARY KEY (id)
	, CONSTRAINT budget_categories_budget_category_unique UNIQUE (budget_id, category_id)
	, CONSTRAINT budget_categories_budget_id_fkey FOREIGN KEY (budget_id) REFERENCES public.budgets (id) ON UPDATE NO ACTION ON DELETE CASCADE
	, CONSTRAINT budget_categories_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.categories (id) ON UPDATE NO ACTION ON DELETE CASCADE
	)
	WITH (OIDS = FALSE);

CREATE INDEX idx_budget_categories_budget_id ON public.budget_categories USING btree (budget_id);

