/**
 * otpService.js
 * ------------------------------------------------------------------
 * Responsible only for DELIVERING an OTP code to the user - via
 * email (nodemailer/SMTP) or SMS (plug your provider's SDK into
 * `sendSms`, e.g. Twilio/MSG91). If no SMTP/SMS credentials are
 * configured (.env left blank), it falls back to logging the code
 * to the console so local development works out of the box.
 * ------------------------------------------------------------------
 */
const nodemailer = require('nodemailer');

const hasSmtpConfig = () => !!process.env.SMTP_HOST && !!process.env.SMTP_USER;

let transporter = null;
if (hasSmtpConfig()) {
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });
}

async function sendEmailOtp(email, code) {
  if (!transporter) {
    console.log(`[DEV OTP] Email OTP for ${email}: ${code}`);
    return { delivered: false, dev: true };
  }
  await transporter.sendMail({
    from: process.env.SMTP_FROM,
    to: email,
    subject: 'Your FinTrack verification code',
    text: `Your OTP is ${code}. It expires in ${process.env.OTP_EXPIRY_MINUTES || 5} minutes.`,
  });
  return { delivered: true };
}

async function sendSmsOtp(mobileNumber, code) {
  if (!process.env.SMS_API_KEY) {
    console.log(`[DEV OTP] SMS OTP for ${mobileNumber}: ${code}`);
    return { delivered: false, dev: true };
  }
  // TODO: integrate real SMS gateway here (Twilio, MSG91, etc.)
  // await smsClient.send({ to: mobileNumber, sender: process.env.SMS_SENDER_ID, message: `OTP: ${code}` });
  return { delivered: true };
}

const isEmail = (identifier) => /\S+@\S+\.\S+/.test(identifier);

module.exports = { sendEmailOtp, sendSmsOtp, isEmail };
