

DROP TABLE IF EXISTS public.users;

CREATE TABLE public.users
	(
	  id            UUID NOT NULL DEFAULT gen_random_uuid()
	, name          VARCHAR (100) NOT NULL
	, email         VARCHAR (255) NOT NULL
	, mobile_number VARCHAR (20)
	, password      TEXT NOT NULL
	, is_verified   BOOL NOT NULL DEFAULT false
	, createdon     TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
	, modiefiedon   TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
	, CONSTRAINT users_pkey PRIMARY KEY (id)
	, CONSTRAINT users_email_key UNIQUE (email)
	, CONSTRAINT users_mobile_number_key UNIQUE (mobile_number)
	)
	WITH (OIDS = FALSE);

DROP TABLE IF EXISTS public.categories;

CREATE TABLE public.categories
	(
	  id                 UUID NOT NULL DEFAULT gen_random_uuid()
	, user_id            UUID
	, parent_category_id UUID
	, name               VARCHAR (100) NOT NULL
	, category_type      VARCHAR (20) NOT NULL
	, icon               VARCHAR (100)
	, color              VARCHAR (20)
	, category_level     VARCHAR (50)
	, is_system          BOOL NOT NULL DEFAULT false
	, is_active          BOOL NOT NULL DEFAULT true
	, created_at         TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
	, updated_at         TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
	, CONSTRAINT categories_pkey PRIMARY KEY (id)
	, CONSTRAINT categories_parent_category_id_fkey FOREIGN KEY (parent_category_id) REFERENCES public.categories (id) ON UPDATE NO ACTION ON DELETE SET NULL
	, CONSTRAINT categories_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users (id) ON UPDATE NO ACTION ON DELETE CASCADE
	)
	WITH (OIDS = FALSE);

CREATE INDEX idx_categories_parent_id ON public.categories USING btree (parent_category_id);

CREATE INDEX idx_categories_type ON public.categories USING btree (category_type);

CREATE INDEX idx_categories_user_id ON public.categories USING btree (user_id);

