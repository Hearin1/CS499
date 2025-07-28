const express = require('express');
const router = express.Router();
const ctrlStatus = require('../controllers/status');

router.get('/', ctrlStatus.list);

module.exports = router;
