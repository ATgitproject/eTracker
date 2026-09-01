const express = require('express');
const multer = require('multer');
const { importStatement } = require('../controllers/importController');
const { requireAuth } = require('../middlewares/authMiddleware');

const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 5 * 1024 * 1024 } });

const router = express.Router();

router.post('/statement', requireAuth, upload.single('statement'), importStatement);

module.exports = router;
