const pool = require("../config/db");

const insert = async ({ req, objName, fields }) => {
  const fieldNames = Object.keys(fields);
  const user_id = JSON.parse(req?.cookies?.session)?.userData?.id;
  const values = Object.values(fields);

  fieldNames.push("user_id");
  values.push(user_id);

  const placeholders = fieldNames.map((_, index) => `$${index + 1}`);

  const query = `
    INSERT INTO ${objName}
    (
      ${fieldNames.join(", ")},
      ${"created_at"},
      ${"updated_at"}
    )
    VALUES
    (
      ${placeholders.join(", ")},
      CURRENT_TIMESTAMP,
      CURRENT_TIMESTAMP
    )
    RETURNING *
  `;

  const result = await pool.query(query, values);

  return result.rows[0];
};

const update = async ({ req, objName, id, fields }) => {
  const fieldNames = Object.keys(fields);
  const values = Object.values(fields);

  const setClause = fieldNames
    .map((field, index) => `${field} = $${index + 1}`)
    .join(", ");

  values.push(id);

  const query = `
    UPDATE ${objName}
    SET
      ${setClause},
      ${"updated_at"} = CURRENT_TIMESTAMP
    WHERE id = $${values.length}
    RETURNING *
  `;

  const result = await pool.query(query, values);

  if (result.rows.length === 0) {
    throw new Error(`Record not found for id: ${id}`);
  }

  return result.rows[0];
};

module.exports = {
  insert,
  update,
};
