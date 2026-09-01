-- =====================================================================
-- FinTrack database schema
-- Run with: psql -U <user> -d fintrack -f migrations/schema.sql
-- =====================================================================

CREATE TABLE IF NOT EXISTS users (
    id              SERIAL PRIMARY KEY,
    name            VARCHAR(120) NOT NULL,
    email           VARCHAR(160) UNIQUE NOT NULL,
    mobile_number   VARCHAR(20) UNIQUE NOT NULL,
    password_hash   VARCHAR(255),              -- optional, OTP is primary auth
    is_verified     BOOLEAN DEFAULT FALSE,
    created_at      TIMESTAMP DEFAULT NOW(),
    updated_at      TIMESTAMP DEFAULT NOW()
);

-- One-time-passwords issued for login/signup, keyed to either email or mobile
CREATE TABLE IF NOT EXISTS otps (
    id              SERIAL PRIMARY KEY,
    identifier      VARCHAR(160) NOT NULL,     -- email or mobile number
    channel         VARCHAR(10)  NOT NULL CHECK (channel IN ('email', 'mobile')),
    otp_code        VARCHAR(10)  NOT NULL,
    purpose         VARCHAR(20)  NOT NULL DEFAULT 'login', -- login | signup
    expires_at      TIMESTAMP NOT NULL,
    consumed        BOOLEAN DEFAULT FALSE,
    created_at      TIMESTAMP DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_otps_identifier ON otps(identifier);

-- Bank accounts (a user can have multiple, e.g. after statement import)
CREATE TABLE IF NOT EXISTS accounts (
    id              SERIAL PRIMARY KEY,
    user_id         INTEGER REFERENCES users(id) ON DELETE CASCADE,
    account_name    VARCHAR(120) NOT NULL DEFAULT 'Primary Account',
    bank_name       VARCHAR(120),
    account_number  VARCHAR(60),
    created_at      TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS transactions (
    id                  SERIAL PRIMARY KEY,
    user_id             INTEGER REFERENCES users(id) ON DELETE CASCADE,
    account_id          INTEGER REFERENCES accounts(id) ON DELETE SET NULL,
    transaction_id      VARCHAR(80) NOT NULL,        -- user/bank supplied reference id
    name                VARCHAR(160) NOT NULL,        -- payee / merchant name
    description         TEXT,
    category            VARCHAR(60) DEFAULT 'Others',
    amount              NUMERIC(14,2) NOT NULL,
    type                VARCHAR(10) NOT NULL CHECK (type IN ('credit', 'debit')),
    transaction_date    DATE NOT NULL DEFAULT CURRENT_DATE,
    source              VARCHAR(20) DEFAULT 'manual', -- manual | import
    created_at          TIMESTAMP DEFAULT NOW(),
    UNIQUE (user_id, transaction_id)
);

CREATE INDEX IF NOT EXISTS idx_transactions_user ON transactions(user_id);
CREATE INDEX IF NOT EXISTS idx_transactions_date ON transactions(transaction_date);
