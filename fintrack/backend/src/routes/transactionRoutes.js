const express = require('express');
const { list, create, summary } = require('../controllers/transactionController');
const { requireAuth } = require('../middlewares/authMiddleware');

const router = express.Router();

router.use(requireAuth);
router.get('/', list);
router.get('/summary', summary);
router.post('/', create);

module.exports = router;
