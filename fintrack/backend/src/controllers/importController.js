/**
 * importController.js
 * ------------------------------------------------------------------
 * Handles POST /api/import/statement (multipart/form-data, field
 * name "statement"). Parses the uploaded CSV via
 * statementParserService and bulk-inserts the resulting transactions
 * for the logged-in user.
 * ------------------------------------------------------------------
 */
const { parseStatement } = require('../services/statementParserService');
const TransactionModel = require('../models/transactionModel');

async function importStatement(req, res, next) {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded. Attach it under field name "statement".' });
    }

    const transactions = parseStatement(req.file.buffer);
    if (!transactions.length) {
      return res.status(400).json({ message: 'No transactions could be parsed from this file.' });
    }

    const insertedCount = await TransactionModel.bulkCreate(req.userId, transactions);

    res.status(201).json({
      message: `Imported ${insertedCount} of ${transactions.length} transactions`,
      insertedCount,
      totalParsed: transactions.length,
    });
  } catch (err) {
    next(err);
  }
}

module.exports = { importStatement };
