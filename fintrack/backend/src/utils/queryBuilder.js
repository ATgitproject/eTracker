const OPERATORS = require("./operators");

const buildQuery = ({ table, filterCondition, sortOrder, recordCount }) => {
  const values = [];

  let query = `
    SELECT *
    FROM ${table}
  `;

  if (filterCondition) {
    const { field, operator, value } = filterCondition;

    if (!field) {
      throw new Error("Filter field is required");
    }

    if (!OPERATORS[operator]) {
      throw new Error(`Invalid filter operator: ${operator}`);
    }

    const sqlOperator = OPERATORS[operator];

    if (operator === "in" || operator === "notin") {
      if (!Array.isArray(value) || value.length === 0) {
        throw new Error(`${operator} operator requires a non-empty array`);
      }

      const placeholders = value.map((item, index) => {
        values.push(item);
        return `$${index + 1}`;
      });

      query += `
        WHERE ${field} ${sqlOperator}
        (${placeholders.join(", ")})
      `;
    } else {
      values.push(value);

      query += `
        WHERE ${field} ${sqlOperator} $1
      `;
    }
  }

  const order = sortOrder?.toUpperCase() || "ASC";

  if (!["ASC", "DESC"].includes(order)) {
    throw new Error("sortOrder must be ASC or DESC");
  }

  // query += ` ORDER BY id ${order}`;

  if (recordCount !== undefined && recordCount !== null) {
    const count = Number(recordCount);

    if (!Number.isInteger(count) || count <= 0) {
      throw new Error("recordCount must be a positive integer");
    }

    query += ` LIMIT ${count}`;
  }

  return {
    query,
    values,
  };
};

module.exports = {
  buildQuery,
};
