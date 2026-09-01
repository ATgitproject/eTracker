/**
 * otpModel.js - data-access layer for the `otps` table.
 */
const { query } = require('../config/db');

const OTP_LENGTH = Number(process.env.OTP_LENGTH || 6);
const OTP_EXPIRY_MINUTES = Number(process.env.OTP_EXPIRY_MINUTES || 5);

const generateCode = () => {
  const min = 10 ** (OTP_LENGTH - 1);
  const max = 10 ** OTP_LENGTH - 1;
  return String(Math.floor(min + Math.random() * (max - min)));
};

const OtpModel = {
  generateCode,

  async create({ identifier, channel, purpose }) {
    const code = generateCode();
    const expiresAt = new Date(Date.now() + OTP_EXPIRY_MINUTES * 60 * 1000);
    const { rows } = await query(
      `INSERT INTO otps (identifier, channel, otp_code, purpose, expires_at)
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [identifier, channel, code, purpose, expiresAt]
    );
    return rows[0];
  },

  /** Fetch the most recent, unconsumed, non-expired OTP for an identifier. */
  async findValid(identifier, code, purpose) {
    const { rows } = await query(
      `SELECT * FROM otps
       WHERE identifier = $1 AND otp_code = $2 AND purpose = $3
         AND consumed = FALSE AND expires_at > NOW()
       ORDER BY created_at DESC LIMIT 1`,
      [identifier, code, purpose]
    );
    return rows[0] || null;
  },

  async consume(id) {
    await query(`UPDATE otps SET consumed = TRUE WHERE id = $1`, [id]);
  },
};

module.exports = OtpModel;
