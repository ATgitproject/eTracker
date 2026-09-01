/**
 * routes/index.js - mounts every feature router under /api/*
 */
const express = require('express');
const authRoutes = require('./authRoutes');
const transactionRoutes = require('./transactionRoutes');
const importRoutes = require('./importRoutes');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/transactions', transactionRoutes);
router.use('/import', importRoutes);

module.exports = router;
