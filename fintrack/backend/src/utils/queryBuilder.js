const OPERATORS = require("./operators");

const buildQuery = ({ table, filterCondition, sortOrder, recordCount }) => {
  const values = [];
  const whereConditions = [];

  let query = `
    SELECT *
    FROM ${table}
  `;

  if (Array.isArray(filterCondition) && filterCondition.length > 0) {
    filterCondition.forEach(({ field, operator, value }) => {
      if (!field) {
        throw new Error("Filter field is required");
      }

      if (value === undefined || value === null || value === "") {
        throw new Error(`Filter value is required for field: ${field}`);
      }

      if (!OPERATORS[operator]) {
        throw new Error(`Invalid filter operator: ${operator}`);
      }

      const sqlOperator = OPERATORS[operator];

      if (operator === "in" || operator === "notin") {
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

    if (whereConditions.length > 0) {
      query += ` WHERE ${whereConditions.join(" AND ")}`;
    }
  }

  if (sortOrder && ["ASC", "DESC"].includes(sortOrder.toUpperCase())) {
    query += ` ORDER BY id ${sortOrder.toUpperCase()}`;
  }

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
