# FinTrack — Architecture & Code Flow

This document is the "map" of the project: what each file does, how a
request flows end-to-end, and how the JSON-driven pieces fit together.
Read this before touching the code.

```
fintrack/
├── backend/     Node.js + Express + PostgreSQL, MVC
└── frontend/    React (Create React App) + SASS + Zustand
```

---

## 1. High-level request flow

### Login (OTP)
```
Login.jsx (step "identifier")
  → authApi.requestOtp(identifier)
    → POST /api/auth/otp/request
      → authController.requestOtp
        → UserModel.findByEmailOrMobile   (must already exist)
        → OtpModel.create                 (generates + stores a code, 5 min expiry)
        → otpService.sendEmailOtp / sendSmsOtp
          (real SMTP/SMS if .env configured, else console.log in dev)
  ← { identifier, channel }
Login.jsx (step "otp") → user types the 6-digit code
  → authApi.verifyOtp(identifier, code)
    → POST /api/auth/otp/verify
      → authController.verifyOtp
        → OtpModel.findValid  → OtpModel.consume
        → UserModel.findByEmailOrMobile → UserModel.markVerified
        → jwt.signToken({ userId })
  ← { token, user }
  → useAuthStore.login({ user, token })   (persists to localStorage)
  → navigate('/')                         (ProtectedRoute now passes)
```

### Signup
Identical shape, but step 1 is a form (name/email/mobile from
`signupFormConfig.json`) that hits `POST /api/auth/signup`
(`authController.signup`), which creates the `users` row **and**
immediately fires the first OTP — so signup lands on the exact same
OTP-verify screen as login (`purpose: "signup"` keeps the two OTP
flows namespaced in the `otps` table).

### Dashboard load
```
Dashboard.jsx → useEffect → useTransactionStore.fetchAll()
  → GET /api/transactions/summary   (this month's income/expenses, spend-by-category)
  → GET /api/transactions?limit=10  (recent list)
  ← store's `metrics`, `spendingByCategory`, `recentTransactions` update
  → every subscribed component (TileGrid, SpendingOverview, RecentTransactions)
    re-renders automatically (Zustand subscription)
```
If the API isn't reachable yet (backend/DB not running), `fetchAll()`
catches the error and the store simply keeps its initial demo data
from `config/mockDashboardData.json` — the UI never breaks.

### Add transaction (floating "+" button)
```
FloatingAddButton → AppLayout opens <TransactionModal>
  → DynamicForm renders fields from transactionFormConfig.json
  → validateFields() checks `required` flags before submit
  → useTransactionStore.addTransaction(payload)
    → POST /api/transactions
      → transactionController.create (re-validates required fields server-side)
      → TransactionModel.create (INSERT ... ON CONFLICT DO NOTHING on transaction_id)
  → store re-runs fetchAll() so tiles/chart/list reflect the new entry
```

### Import bank statement (navbar button)
```
Navbar "Import Statement" → AppLayout opens <ImportModal>
  → user picks/drops a .csv
  → useTransactionStore.importStatement(file, onProgress)
    → POST /api/import/statement  (multipart/form-data, multer memory storage)
      → importController.importStatement
        → statementParserService.parseStatement(csvBuffer)
            - normalises column names (date/description/debit/credit/amount/type)
            - guesses a category from keywords in the description
        → TransactionModel.bulkCreate  (loops, skips duplicate transaction_ids)
  → store re-runs fetchAll()
```

---

## 2. Backend — MVC layout (`backend/`)

| Layer | Folder | Responsibility |
|---|---|---|
| Entry | `server.js` | Express app setup, mounts `/api`, error handler, `app.listen` |
| Config | `src/config/db.js` | One shared `pg` connection pool (`query()` helper) |
| Model | `src/models/*Model.js` | **Only** SQL. No req/res, no validation, no HTTP. |
| Controller | `src/controllers/*Controller.js` | Validates input, calls models/services, shapes the JSON response. **No SQL.** |
| Service | `src/services/*.js` | Cross-cutting logic reused by controllers: `otpService` (delivery), `statementParserService` (CSV → transactions) |
| Route | `src/routes/*.js` | Maps HTTP verb + path → controller function; `routes/index.js` mounts everything under `/api` |
| Middleware | `src/middlewares/*.js` | `authMiddleware` (JWT check → `req.userId`), `errorHandler` (last-resort JSON error response) |
| Util | `src/utils/jwt.js` | `signToken` / `verifyToken` |

**Why this split matters:** a controller never writes SQL, and a
model never touches `req`/`res`. That means you can unit-test
`TransactionModel.summary()` with a real Postgres test DB and no HTTP
layer at all, and you can swap `otpService`'s SMS provider (Twilio,
MSG91, etc.) without touching `authController.js`.

### Database schema (`backend/migrations/schema.sql`)
- `users` — name, email, mobile_number, is_verified (no password column is required; it exists only if you later want to layer password login on top of OTP)
- `otps` — identifier (email or mobile), channel, code, purpose (`login`/`signup`), expiry, consumed flag
- `accounts` — optional grouping for multiple bank accounts per user
- `transactions` — amount, type (`credit`/`debit`), category, transaction_id (unique per user — this is what makes CSV import idempotent), source (`manual`/`import`)

### Environment variables (`backend/.env.example`)
Copy to `.env` and fill in real values before running. With
`SMTP_HOST`/`SMS_API_KEY` left blank, `otpService` logs OTP codes to
the server console instead of sending them — this is intentional so
you can develop the whole OTP flow locally with zero external
accounts.

---

## 3. Frontend — component/data-flow (`frontend/`)

### The JSON-driven architecture (the part you specifically asked for)

Every place the UI needed to be reconfigurable without touching JSX
was pulled into `src/config/*.json`:

| JSON file | Drives |
|---|---|
| `theme.json` | Every color used anywhere in the app, for both light and dark mode, plus the chart color palette. Read by `useThemeStore`. |
| `navConfig.json` | Sidebar links (icon, label, route), and the navbar's greeting text / which buttons are visible. |
| `dashboardTiles.json` | The 4 (or fewer/more) top summary cards: label, which metric/change key to read, icon, color tone. |
| `dashboardLayout.json` | **Which containers appear on the dashboard, in what order, and how wide (out of 12 columns).** This is the piece that answers "should I be able to configure the container placement" — see below. |
| `transactionFormConfig.json` | Every field in the "Add Transaction" modal, including which are `required`. |
| `signupFormConfig.json` | Every field in the Signup form. |
| `merchantIcons.json` | Keyword → color/initial mapping for the recent-transactions list icons (e.g. "starbucks" → green badge). |
| `mockDashboardData.json` | Demo data so the dashboard is pixel-complete before the backend is even running. |

### How to add a new dashboard container (no JSX required)
1. Build the component, e.g. `components/BudgetGoals/BudgetGoals.jsx`.
2. Register it in `components/DashboardContainer/registry.js`:
   ```js
   import BudgetGoals from '../BudgetGoals/BudgetGoals.jsx';
   export const CONTAINER_REGISTRY = { ...existing, budgetGoals: BudgetGoals };
   ```
3. Add an entry to `dashboardLayout.json`:
   ```json
   { "id": "budgetGoals", "type": "budgetGoals", "row": 3, "span": 6, "title": "Budget Goals" }
   ```
`DashboardGrid.jsx` sorts containers by `row` and renders them into a
12-column CSS grid; two containers on the same `row` whose `span`s
add up to 12 sit **inline** (e.g. Spending Overview `span 7` +
Recent Transactions `span 5`), while a `span: 12` container always
starts its own row. Bumping `row` past the last one puts a new
container **below** everything else — exactly the "add a container
below/inline" requirement.

### How the tiles get "proper width" automatically
`TileGrid.scss` uses
`grid-template-columns: repeat(auto-fit, minmax(min(240px, 100%), 1fr))`.
Whatever number of tiles exist in `dashboardTiles.json`, the grid
divides the row evenly between them (down to a 240px minimum before
wrapping), and collapses to 1 column on mobile — no manual breakpoint
math needed when a tile is added or removed.

### State management (Zustand)
- **`useThemeStore`** — the single source of truth for theming.
  `theme.json`'s tokens get pushed onto `document.documentElement` as
  CSS custom properties (`--color-primary`, etc.) whenever the mode
  changes, so every `.scss` file just reads `var(--color-primary)`
  and repaints instantly — no context provider, no re-render cost,
  and it's changeable at runtime from anywhere via
  `useThemeStore.getState().toggleTheme()`.
- **`useAuthStore`** — current user + JWT, persisted to
  `localStorage`.
- **`useTransactionStore`** — dashboard metrics, spending-by-category,
  recent transactions, plus the `addTransaction` / `importStatement`
  actions. Starts populated with demo data, swapped for live API data
  by `fetchAll()`.

### Component tree (authenticated app)
```
App.jsx (routes)
└─ AppLayout
   ├─ Sidebar               (navConfig.json)
   ├─ Navbar                (navConfig.json) → ThemeToggle
   ├─ <page content>
   │   └─ Dashboard → DashboardGrid → DashboardContainer × N
   │       ├─ TileGrid → Tile × N            (dashboardTiles.json)
   │       ├─ SpendingOverview (recharts donut)
   │       └─ RecentTransactions             (merchantIcons.json)
   ├─ FloatingAddButton → TransactionModal → DynamicForm  (transactionFormConfig.json)
   └─ (Navbar import button) → ImportModal
```

### Auth pages
```
AuthLayout (shared split-panel shell: gradient art panel + form card)
├─ Login  (2-step: identifier → OtpInput)
└─ Signup (2-step: DynamicForm(signupFormConfig.json) → OtpInput)
```

### Cross-platform responsiveness
Breakpoints are centralised in `styles/_variables.scss`
(`mobile`/`tablet`/`laptop`/`desktop` mixins). The sidebar collapses
off-canvas below the laptop breakpoint, the dashboard grid drops from
12 → 6 → 1 columns, and the tile grid re-flows via `auto-fit` — all
from the same three files (`AppLayout.scss`, `DashboardGrid.scss`,
`TileGrid.scss`), so no page-specific responsive code was needed.

---

## 4. Running it locally

See `README.md` at the project root for step-by-step setup.
