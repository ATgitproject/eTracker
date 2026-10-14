const userRepository = require("../repository/userRepository");

const {
  hashPassword,
  verifyPassword,
  generateAccessToken,
  generateRefreshToken,
} = require("../utils/auth");

const pool = require("../config/db");

const sanitizeUser = (user) => {
  if (!user) {
    return null;
  }

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    mobileNumber: user.mobile_number,
    isVerified: user.is_verified,
    createdon: user.createdon,
    modiefiedon: user.modiefiedon,
  };
};

const signup = async (payload) => {
  const { name, email, mobileNumber, password, subscriptions = [] } = payload;

  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    const existingUser = await client.query(
      `SELECT id FROM users WHERE email = $1 LIMIT 1`,
      [email],
    );

    if (existingUser.rows.length > 0) {
      throw new Error("Email already registered");
    }

    const passwordHash = await hashPassword(password);

    const userResult = await client.query(
      `INSERT INTO users (
        name, email, mobile_number, password
      )
      VALUES ($1, $2, $3, $4)
      RETURNING id, name, email, mobile_number, is_verified,
                createdon, modiefiedon`,
      [name, email, mobileNumber || null, passwordHash],
    );

    const user = userResult.rows[0];

    console.log("Created user ID:", user.id);

    const budgetEntries = Array.isArray(payload.budgets)
      ? payload.budgets
      : Object.entries(payload.budgets || {}).map(([budgetName, amount]) => ({
          name: budgetName,
          amount,
          periodType: "Monthly",
          startDate: new Date().toISOString().slice(0, 10),
          endDate: null,
          categoryId: null,
        }));

    console.log("Budgets received:", budgetEntries);

    for (const budget of budgetEntries) {
      if (!budget.name?.trim()) {
        throw new Error("Budget name is required");
      }

      const amount = Number(budget.amount);

      if (!Number.isFinite(amount) || amount <= 0) {
        throw new Error(`Invalid amount for budget: ${budget.name}`);
      }

      const budgetResult = await client.query(
        `INSERT INTO public.budgets (
          user_id,
          name,
          amount,
          period_month,
          start_date,
          end_date,
          category_id
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING id, user_id, name, amount`,
        [
          user.id,
          budget.name.trim(),
          amount,
          budget.periodType || "Monthly",
          budget.startDate,
          budget.endDate || null,
          budget.categoryId || null,
        ],
      );

      console.log(
        `INSERT INTO public.budgets (
          user_id,
          name,
          amount,
          period_month,
          start_date,
          end_date,
          category_id
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING id, user_id, name, amount`,
        [
          user.id,
          budget.name.trim(),
          amount,
          budget.periodType || "Monthly",
          budget.startDate,
          budget.endDate || null,
          budget.categoryId || null,
        ],
      );

      console.log("Inserted budget:", budgetResult.rows[0]);
    }

    for (const subscription of subscriptions) {
      if (!subscription.name?.trim()) continue;

      const amount = Number(subscription.amount);

      if (!Number.isFinite(amount) || amount <= 0) {
        throw new Error(
          `Invalid amount for subscription: ${subscription.name}`,
        );
      }

      await client.query(
        `INSERT INTO public.subscriptions (
          user_id,
          name,
          merchant,
          amount,
          billing_cycle,
          next_billing_date,
          payment_method,
          category_id,
          icon
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
        [
          user.id,
          subscription.name.trim(),
          subscription.merchant || null,
          amount,
          subscription.billingCycle || subscription.cycle || "Monthly",
          subscription.nextBillingDate || null,
          subscription.paymentMethod || null,
          subscription.categoryId || null,
          subscription.icon || null,
        ],
      );
    }

    await client.query("COMMIT");

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    return {
      accessToken,
      refreshToken,
      session: {
        userData: sanitizeUser(user),
        token: accessToken,
      },
    };
  } catch (error) {
    await client.query("ROLLBACK");
    console.error("Signup transaction failed:", error.message);
    throw error;
  } finally {
    client.release();
  }
};

const login = async ({ email, password }) => {
  const user = await userRepository.findByEmail(email);

  if (!user) {
    throw new Error("Invalid email or password");
  }

  const validPassword = await verifyPassword(password, user.password);

  if (!validPassword) {
    throw new Error("Invalid email or password");
  }

  return {
    accessToken: generateAccessToken(user),
    refreshToken: generateRefreshToken(user),
    session: { userData: sanitizeUser(user), token: generateAccessToken(user) },
  };
};

const logout = async (userId) => {
  try {
    return true;
  } catch (error) {
    throw error;
  }
};

const getUserById = async (id) => {
  const user = await userRepository.findById(id);

  if (!user) {
    throw new Error("User not found");
  }

  return sanitizeUser(user);
};

module.exports = {
  signup,
  login,
  logout,
  getUserById,
};
