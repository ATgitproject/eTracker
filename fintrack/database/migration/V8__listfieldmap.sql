CREATE TABLE IF NOT EXISTS public.list_field_map
(
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    field_id        VARCHAR(100) NOT NULL,
    seq             BIGINT GENERATED ALWAYS AS IDENTITY,
    list_id         UUID NOT NULL,
    value           VARCHAR(255) NOT NULL,
    is_hidden       BOOLEAN NOT NULL DEFAULT FALSE,
    sort_order      INTEGER NOT NULL DEFAULT 0,
    created_on      TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    created_by      UUID,
    modified_on     TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    modified_by     UUID,
    is_default      BOOLEAN NOT NULL DEFAULT FALSE,

    CONSTRAINT list_field_map_list_id_fkey
        FOREIGN KEY (list_id)
        REFERENCES public.list_master(id)
);