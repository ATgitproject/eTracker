/**
 * transactionController.js
 * ------------------------------------------------------------------
 * CRUD + dashboard-aggregation endpoints for transactions.
 * ------------------------------------------------------------------
 */
const TransactionModel = require('../models/transactionModel');

/** GET /api/transactions */
async function list(req, res, next) {
  try {
    const { limit, offset } = req.query;
    const transactions = await TransactionModel.listByUser(req.userId, {
      limit: limit ? Number(limit) : 100,
      offset: offset ? Number(offset) : 0,
    });
    res.json({ transactions });
  } catch (err) {
    next(err);
  }
}

/**
 * POST /api/transactions
 * Required fields enforced here (mirrors the front-end form config):
 *   amount, name, type, transactionId
 * Optional: description, category, transactionDate, accountId
 */
async function create(req, res, next) {
  try {
    const { amount, name, transactionId, type, description, category, transactionDate, accountId } = req.body;

    const missing = ['amount', 'name', 'transactionId', 'type'].filter((f) => !req.body[f] && req.body[f] !== 0);
    if (missing.length) {
      return res.status(400).json({ message: `Missing required field(s): ${missing.join(', ')}` });
    }
    if (!['credit', 'debit'].includes(type)) {
      return res.status(400).json({ message: "type must be 'credit' or 'debit'" });
    }

    const tx = await TransactionModel.create(req.userId, {
      amount,
      name,
      transactionId,
      type,
      description,
      category,
      transactionDate,
      accountId,
      source: 'manual',
    });

    if (!tx) {
      return res.status(409).json({ message: 'A transaction with this transaction ID already exists' });
    }
    res.status(201).json({ transaction: tx });
  } catch (err) {
    next(err);
  }
}

/** GET /api/transactions/summary - powers the 4 top tiles */
async function summary(req, res, next) {
  try {
    const totals = await TransactionModel.summary(req.userId);
    const categories = await TransactionModel.spendingByCategory(req.userId);
    res.json({ totals, categories });
  } catch (err) {
    next(err);
  }
}

module.exports = { list, create, summary };
