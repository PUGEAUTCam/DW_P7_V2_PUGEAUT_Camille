const express = require('express');
const router = express.Router();

const passwordValidator = require('../middlewares/password-validator-config')

//Import Controllers
const userCtrl = require('../controllers/user');


// Create 2 routes
router.post('/signup', passwordValidator, userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;