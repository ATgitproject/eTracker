CREATE TABLE IF NOT EXISTS public.list_master
(
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    seq             BIGINT GENERATED ALWAYS AS IDENTITY,
    name            VARCHAR(100) NOT NULL,
    type            VARCHAR(50) NOT NULL,
    status          VARCHAR(50) NOT NULL DEFAULT 'active',
    created_on      TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    created_by      UUID,
    modified_on     TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    modified_by     UUID
);
