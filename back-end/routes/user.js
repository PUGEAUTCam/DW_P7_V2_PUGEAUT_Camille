const express = require('express');
const router = express.Router();

const passwordValidator = require('../middlewares/password-validator-config')

//Import Controllers
const userCtrl = require('../controllers/user');

const multer = require('../middlewares/multer-config');
const auth = require('../middlewares/auth');

// CRUD
router.post('/signup', passwordValidator, userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/me', userCtrl.me);
router.patch('/profileUpdate', auth, userCtrl.profileUpdate);

router.post("/uploadCoverImg", multer, userCtrl.uploadCoverImg);

module.exports = router;