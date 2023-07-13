const express = require('express');
const registerUser = require('./UserController');
const router = express.Router();

router.route('/api/v1/register').post(registerUser);

module.exports = router;
