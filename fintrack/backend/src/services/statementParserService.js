/**
 * statementParserService.js
 * ------------------------------------------------------------------
 * Parses an uploaded bank-statement file (CSV) into a normalised
 * array of transaction objects ready for TransactionModel.bulkCreate.
 *
 * Expected CSV headers (case-insensitive, order-independent):
 *   date, description, refno/transaction_id, debit, credit  OR  amount, type
 *
 * A simple category-guessing map is applied based on keywords found
 * in the description, purely so imported data feeds the dashboard's
 * "Spending Overview" donut chart out of the box.
 * ------------------------------------------------------------------
 */
const { parse } = require('csv-parse/sync');

const CATEGORY_KEYWORDS = {
  Housing: ['rent', 'emi', 'mortgage', 'maintenance'],
  'Food & Dining': ['restaurant', 'swiggy', 'zomato', 'starbucks', 'cafe', 'food'],
  Transport: ['uber', 'ola', 'fuel', 'petrol', 'metro', 'transport'],
  Shopping: ['amazon', 'flipkart', 'myntra', 'shopping', 'mall'],
  Entertainment: ['netflix', 'spotify', 'prime video', 'movie', 'bookmyshow'],
};

function guessCategory(description = '') {
  const lower = description.toLowerCase();
  for (const [category, keywords] of Object.entries(CATEGORY_KEYWORDS)) {
    if (keywords.some((k) => lower.includes(k))) return category;
  }
  return 'Others';
}

function normaliseRow(raw) {
  const lowerKeys = Object.fromEntries(
    Object.entries(raw).map(([k, v]) => [k.trim().toLowerCase(), v])
  );

  const debit = parseFloat(lowerKeys.debit || 0) || 0;
  const credit = parseFloat(lowerKeys.credit || 0) || 0;
  let amount = parseFloat(lowerKeys.amount || 0) || 0;
  let type = (lowerKeys.type || '').toLowerCase();

  if (!type) {
    if (debit > 0) {
      type = 'debit';
      amount = debit;
    } else if (credit > 0) {
      type = 'credit';
      amount = credit;
    } else {
      type = amount < 0 ? 'debit' : 'credit';
      amount = Math.abs(amount);
    }
  }

  const description = lowerKeys.description || lowerKeys.narration || lowerKeys.name || '';

  return {
    transactionId:
      lowerKeys.refno || lowerKeys.transaction_id || lowerKeys.ref || `IMP-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    name: (lowerKeys.name || description || 'Imported Transaction').slice(0, 150),
    description,
    category: guessCategory(description),
    amount,
    type: type === 'debit' ? 'debit' : 'credit',
    transactionDate: lowerKeys.date ? new Date(lowerKeys.date) : new Date(),
    source: 'import',
  };
}

/** Parse a CSV buffer/string into normalised transaction objects. */
function parseStatement(fileBuffer) {
  const records = parse(fileBuffer, {
    columns: true,
    skip_empty_lines: true,
    trim: true,
  });
  return records.map(normaliseRow);
}

module.exports = { parseStatement, guessCategory };
