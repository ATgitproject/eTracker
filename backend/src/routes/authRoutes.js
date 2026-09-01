const express = require('express');
const { signup, requestOtp, verifyOtp, me } = require('../controllers/authController');
const { requireAuth } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/signup', signup);
router.post('/otp/request', requestOtp);
router.post('/otp/verify', verifyOtp);
router.get('/me', requireAuth, me);

module.exports = router;
