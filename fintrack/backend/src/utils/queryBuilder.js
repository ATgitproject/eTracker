const OPERATORS = require("./operators");

const buildQuery = ({
  table,
  filterCondition,
  sortOrder,
  recordCount,
  userId,
}) => {
  const values = [];
  const whereConditions = [];

  if (!/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(table || "")) {
    throw new Error("Invalid table name");
  }

  if (!userId) {
    throw new Error("Authenticated user ID is required");
  }

  values.push(userId);
  whereConditions.push(`user_id = $${values.length}`);

  if (Array.isArray(filterCondition)) {
    filterCondition.forEach(({ field, operator, value }) => {
      if (!field) {
        throw new Error("Filter field is required");
      }

      if (!/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(field)) {
        throw new Error("Invalid filter field");
      }

      if (value === undefined || value === null || value === "") {
        throw new Error(`Filter value is required for field: ${field}`);
      }

      if (!OPERATORS[operator]) {
        throw new Error(`Invalid filter operator: ${operator}`);
      }

      const sqlOperator = OPERATORS[operator];

      if (operator === "in" || operator === "nin") {
        if (!Array.isArray(value) || value.length === 0) {
          throw new Error(`${operator} operator requires a non-empty array`);
        }

        const placeholders = value.map((item) => {
          values.push(item);
          return `$${values.length}`;
        });

        whereConditions.push(
          `${field} ${sqlOperator} (${placeholders.join(", ")})`,
        );
      } else {
        values.push(value);
        whereConditions.push(`${field} ${sqlOperator} $${values.length}`);
      }
    });
  }

  let query = `SELECT * FROM ${table}`;

  query += ` WHERE ${whereConditions.join(" AND ")}`;

  if (sortOrder && ["ASC", "DESC"].includes(String(sortOrder).toUpperCase())) {
    query += ` ORDER BY id ${String(sortOrder).toUpperCase()}`;
  }

  if (recordCount !== undefined && recordCount !== null) {
    const count = Number(recordCount);

    if (!Number.isInteger(count) || count <= 0) {
      throw new Error("recordCount must be a positive integer");
    }

    query += ` LIMIT ${count}`;
  }

  return { query, values };
};

module.exports = { buildQuery };
