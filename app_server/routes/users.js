var express = require('express');
var router = express.Router();
var dashboardCtrl = require('../controllers/dashboard');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/dashboard/:username', dashboardCtrl.dashboard);


module.exports = router;
