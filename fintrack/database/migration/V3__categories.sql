CREATE TABLE IF NOT EXISTS public.categories (
    id UUID NOT NULL DEFAULT gen_random_uuid(),

    user_id UUID,

    parent_category_id UUID,

    name VARCHAR(100) NOT NULL,

    category_type VARCHAR(20) NOT NULL
        CHECK (category_type IN ('income', 'expense')),

    icon VARCHAR(100),

    color VARCHAR(20),

    is_system BOOLEAN NOT NULL DEFAULT false,

    is_active BOOLEAN NOT NULL DEFAULT true,

    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT categories_pkey
        PRIMARY KEY (id),

    CONSTRAINT categories_parent_category_id_fkey
        FOREIGN KEY (parent_category_id)
        REFERENCES public.categories (id)
        ON UPDATE NO ACTION
        ON DELETE SET NULL,

    CONSTRAINT categories_user_id_fkey
        FOREIGN KEY (user_id)
        REFERENCES public.users (id)
        ON UPDATE NO ACTION
        ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_categories_parent_id
    ON public.categories (parent_category_id);

CREATE INDEX IF NOT EXISTS idx_categories_type
    ON public.categories (category_type);

CREATE INDEX IF NOT EXISTS idx_categories_user_id
    ON public.categories (user_id);