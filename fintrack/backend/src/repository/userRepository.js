const pool = require("../config/db");

const findByEmail = async (email) => {
  const result = await pool.query(
    `
      SELECT
        id,
        name,
        email,
        mobile_number,
        password,
        is_verified,
        createdon,
        modiefiedon
      FROM users
      WHERE email = $1
      LIMIT 1
    `,
    [email],
  );

  return result.rows[0] || null;
};

const findById = async (id) => {
  const result = await pool.query(
    `
      SELECT
        id,
        name,
        email,
        mobile_number,
        password,
        is_verified,
        createdon,
        modiefiedon
      FROM users
      WHERE id = $1
      LIMIT 1
    `,
    [id],
  );

  return result.rows[0] || null;
};

const createUser = async ({ name, email, mobileNumber, passwordHash }) => {
  const result = await pool.query(
    `
      INSERT INTO users (
        name,
        email,
        mobile_number,
        password
      )
      VALUES ($1, $2, $3, $4)
      RETURNING
        id,
        name,
        email,
        mobile_number,
        is_verified,
        createdon,
        modiefiedon
    `,
    [name, email, mobileNumber || null, passwordHash],
  );

  return result.rows[0];
};

module.exports = {
  findByEmail,
  findById,
  createUser,
};
