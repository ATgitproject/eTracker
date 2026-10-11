const pool = require("../config/db");

const remove = async ({ objName, id }) => {
  const query = `
    DELETE FROM ${objName}
    WHERE id = $1
    RETURNING *
  `;

  const result = await pool.query(query, [id]);

  if (result.rows.length === 0) {
    throw new Error(`Record not found for id: ${id}`);
  }

  return result.rows[0];
};

module.exports = {
  remove,
};
