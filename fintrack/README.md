# FinTrack

A full-stack personal finance dashboard: React (Create React App) +
SASS + Zustand frontend, Node.js/Express (MVC) + PostgreSQL backend.
OTP-only authentication (email or mobile, no passwords), bank-statement
CSV import, a floating add-transaction button, dark mode, and a
JSON-driven dashboard layout.

See **`ARCHITECTURE.md`** for the full file-by-file code flow.

## Prerequisites
- Node.js 18+
- PostgreSQL 14+

## 1. Backend setup

```bash
cd backend
npm install
cp .env.example .env       # then edit .env with your DB credentials

# create the database, then load the schema
createdb fintrack
psql -U postgres -d fintrack -f migrations/schema.sql

npm run dev                # starts on http://localhost:5000
```

Leave `SMTP_*` and `SMS_*` blank in `.env` for local development —
OTP codes will be printed to the backend console instead of actually
being emailed/texted, so you can log in without any third-party
account. Plug in real SMTP creds or an SMS gateway (Twilio, MSG91,
etc. — see `src/services/otpService.js`) when you're ready to go live.

## 2. Frontend setup

```bash
cd frontend
npm install
npm start                   # starts on http://localhost:3000
```

`package.json`'s `"proxy": "http://localhost:5000"` field forwards
any `/api/*` request from the dev server straight to the backend
(standard Create React App proxying — no extra config needed), so
just open http://localhost:3000.

## 3. First login

1. Go to `/signup`, fill in name/email/mobile.
2. Check the **backend terminal** for a line like
   `[DEV OTP] Email OTP for you@example.com: 482913` (until you
   configure real SMTP).
3. Enter that code on the verification screen.

## 4. Try the features

- **Import a statement**: click "Import Statement" in the navbar and
  upload a CSV with columns like `date, description, debit, credit`
  (or `amount, type`).
- **Add a transaction**: click the floating `+` button (bottom-right).
- **Dark mode**: toggle switch in the navbar — persists across
  reloads.
- **Reconfigure the dashboard**: edit
  `frontend/src/config/dashboardLayout.json` or
  `dashboardTiles.json` and refresh — no code changes needed.

## Project structure

```
fintrack/
├── ARCHITECTURE.md     ← full code-flow documentation, read this first
├── backend/            ← Express + PostgreSQL, MVC
└── frontend/           ← React (Create React App) + SASS + Zustand
```
