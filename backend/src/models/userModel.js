/**
 * userModel.js
 * ------------------------------------------------------------------
 * Data-access layer for the `users` table. Models NEVER contain
 * request/response logic (that belongs in controllers) - they only
 * know how to talk to PostgreSQL.
 * ------------------------------------------------------------------
 */
const { query } = require('../config/db');

const UserModel = {
  async findByEmailOrMobile(identifier) {
    const { rows } = await query(
      `SELECT * FROM users WHERE email = $1 OR mobile_number = $1 LIMIT 1`,
      [identifier]
    );
    return rows[0] || null;
  },

  async findById(id) {
    const { rows } = await query(`SELECT * FROM users WHERE id = $1`, [id]);
    return rows[0] || null;
  },

  async create({ name, email, mobileNumber }) {
    const { rows } = await query(
      `INSERT INTO users (name, email, mobile_number, is_verified)
       VALUES ($1, $2, $3, TRUE) RETURNING *`,
      [name, email, mobileNumber]
    );
    return rows[0];
  },

  async markVerified(id) {
    const { rows } = await query(
      `UPDATE users SET is_verified = TRUE, updated_at = NOW() WHERE id = $1 RETURNING *`,
      [id]
    );
    return rows[0];
  },
};

module.exports = UserModel;
