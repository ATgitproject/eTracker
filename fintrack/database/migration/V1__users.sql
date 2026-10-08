CREATE TABLE IF NOT EXISTS public.users
	(
	id            UUID NOT NULL DEFAULT gen_random_uuid(),
	name          VARCHAR (100) NOT NULL,
	email         VARCHAR (255) NOT NULL,
	mobile_number VARCHAR (20),
	password      TEXT NOT NULL,
	is_verified   BOOL NOT NULL DEFAULT false,
	createdon     TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
	modiefiedon   TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT users_pkey PRIMARY KEY (id),
	CONSTRAINT users_email_key UNIQUE (email),
	CONSTRAINT users_mobile_number_key UNIQUE (mobile_number)
	)
	WITH (OIDS = FALSE);

