var express = require('express');
var router = express.Router();
var controller = require('../controllers/status');

router.get('/', controller.status);

module.exports = router;
