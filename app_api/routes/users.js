const express = require('express');
const router = express.Router();
const ctrlUsers = require('../controllers/users');

router.post('/register', ctrlUsers.register);
router.post('/login', ctrlUsers.login);
router.put('/:username/settings', ctrlUsers.updateSettings);
router.get('/:username/dashboard', ctrlUsers.dashboard);

module.exports = router;
