CREATE TABLE IF NOT EXISTS public.navigation
	(
	id            UUID NOT NULL DEFAULT gen_random_uuid(),
	"key"         VARCHAR (50) NOT NULL,
	name          VARCHAR (100) NOT NULL,
	path          VARCHAR (255) NOT NULL,
	icon          VARCHAR (100),
	display_order INTEGER NOT NULL DEFAULT 0,
	is_active     BOOL NOT NULL DEFAULT true,
	created_at    TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_at    TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT navigation_pkey PRIMARY KEY (id),
	CONSTRAINT navigation_key_key UNIQUE (key),
	CONSTRAINT navigation_path_key UNIQUE (path)
	)
	WITH (OIDS = FALSE);
