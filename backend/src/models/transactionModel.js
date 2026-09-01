/**
 * transactionModel.js - data-access layer for the `transactions` table.
 */
const { query } = require('../config/db');

const TransactionModel = {
  async listByUser(userId, { limit = 100, offset = 0 } = {}) {
    const { rows } = await query(
      `SELECT * FROM transactions WHERE user_id = $1
       ORDER BY transaction_date DESC, created_at DESC
       LIMIT $2 OFFSET $3`,
      [userId, limit, offset]
    );
    return rows;
  },

  async create(userId, tx) {
    const { rows } = await query(
      `INSERT INTO transactions
        (user_id, account_id, transaction_id, name, description, category, amount, type, transaction_date, source)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)
       ON CONFLICT (user_id, transaction_id) DO NOTHING
       RETURNING *`,
      [
        userId,
        tx.accountId || null,
        tx.transactionId,
        tx.name,
        tx.description || null,
        tx.category || 'Others',
        tx.amount,
        tx.type,
        tx.transactionDate || new Date(),
        tx.source || 'manual',
      ]
    );
    return rows[0] || null;
  },

  /** Bulk insert used by the bank-statement importer. Returns count inserted. */
  async bulkCreate(userId, txList) {
    let inserted = 0;
    for (const tx of txList) {
      // eslint-disable-next-line no-await-in-loop
      const row = await TransactionModel.create(userId, tx);
      if (row) inserted += 1;
    }
    return inserted;
  },

  async summary(userId) {
    const { rows } = await query(
      `SELECT
         COALESCE(SUM(CASE WHEN type = 'credit' THEN amount END), 0)  AS total_income,
         COALESCE(SUM(CASE WHEN type = 'debit'  THEN amount END), 0)  AS total_expenses
       FROM transactions
       WHERE user_id = $1
         AND date_trunc('month', transaction_date) = date_trunc('month', CURRENT_DATE)`,
      [userId]
    );
    return rows[0];
  },

  async spendingByCategory(userId) {
    const { rows } = await query(
      `SELECT category, SUM(amount) AS total
       FROM transactions
       WHERE user_id = $1 AND type = 'debit'
         AND date_trunc('month', transaction_date) = date_trunc('month', CURRENT_DATE)
       GROUP BY category
       ORDER BY total DESC`,
      [userId]
    );
    return rows;
  },
};

module.exports = TransactionModel;
