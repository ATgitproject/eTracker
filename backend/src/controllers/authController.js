/**
 * authController.js
 * ------------------------------------------------------------------
 * Handles the OTP authentication flow:
 *   1. POST /api/auth/otp/request  -> generate + send an OTP
 *   2. POST /api/auth/otp/verify   -> validate OTP, log the user in
 *   3. POST /api/auth/signup       -> create a new user, then behaves
 *                                      like otp/request for that user
 * Controllers only orchestrate: validate input -> call
 * models/services -> shape the HTTP response. No SQL or SMTP code
 * lives here.
 * ------------------------------------------------------------------
 */
const UserModel = require('../models/userModel');
const OtpModel = require('../models/otpModel');
const { sendEmailOtp, sendSmsOtp, isEmail } = require('../services/otpService');
const { signToken } = require('../utils/jwt');

/** POST /api/auth/signup - create the user record, then send first OTP */
async function signup(req, res, next) {
  try {
    const { name, email, mobileNumber } = req.body;
    if (!name || !email || !mobileNumber) {
      return res.status(400).json({ message: 'name, email and mobileNumber are required' });
    }

    const existing = await UserModel.findByEmailOrMobile(email) || await UserModel.findByEmailOrMobile(mobileNumber);
    if (existing) {
      return res.status(409).json({ message: 'An account with this email or mobile number already exists' });
    }

    const user = await UserModel.create({ name, email, mobileNumber });

    // Immediately issue a login OTP to the email so the signup flow
    // finishes with the same OTP-verify screen as login.
    const otp = await OtpModel.create({ identifier: email, channel: 'email', purpose: 'signup' });
    await sendEmailOtp(email, otp.otp_code);

    return res.status(201).json({
      message: 'Account created. Verification code sent to your email.',
      identifier: email,
    });
  } catch (err) {
    next(err);
  }
}

/** POST /api/auth/otp/request - { identifier } where identifier = email or mobile */
async function requestOtp(req, res, next) {
  try {
    const { identifier, purpose = 'login' } = req.body;
    if (!identifier) return res.status(400).json({ message: 'identifier is required' });

    const user = await UserModel.findByEmailOrMobile(identifier);
    if (!user) {
      return res.status(404).json({ message: 'No account found for this email/mobile number. Please sign up first.' });
    }

    const channel = isEmail(identifier) ? 'email' : 'mobile';
    const otp = await OtpModel.create({ identifier, channel, purpose });

    if (channel === 'email') await sendEmailOtp(identifier, otp.otp_code);
    else await sendSmsOtp(identifier, otp.otp_code);

    return res.json({ message: `OTP sent via ${channel}`, identifier, channel });
  } catch (err) {
    next(err);
  }
}

/** POST /api/auth/otp/verify - { identifier, code, purpose } -> { token, user } */
async function verifyOtp(req, res, next) {
  try {
    const { identifier, code, purpose = 'login' } = req.body;
    if (!identifier || !code) {
      return res.status(400).json({ message: 'identifier and code are required' });
    }

    const record = await OtpModel.findValid(identifier, code, purpose);
    if (!record) {
      return res.status(401).json({ message: 'Invalid or expired code' });
    }
    await OtpModel.consume(record.id);

    const user = await UserModel.findByEmailOrMobile(identifier);
    if (!user) return res.status(404).json({ message: 'User not found' });

    if (!user.is_verified) await UserModel.markVerified(user.id);

    const token = signToken({ userId: user.id });
    return res.json({
      message: 'Logged in successfully',
      token,
      user: { id: user.id, name: user.name, email: user.email, mobileNumber: user.mobile_number },
    });
  } catch (err) {
    next(err);
  }
}

/** GET /api/auth/me - return the current logged-in user (requires authMiddleware) */
async function me(req, res, next) {
  try {
    const user = await UserModel.findById(req.userId);
    if (!user) return res.status(404).json({ message: 'User not found' });
    return res.json({ user: { id: user.id, name: user.name, email: user.email, mobileNumber: user.mobile_number } });
  } catch (err) {
    next(err);
  }
}

module.exports = { signup, requestOtp, verifyOtp, me };
