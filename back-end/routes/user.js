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
router.get('/me', auth, userCtrl.me);
router.get('/:id', userCtrl.getOneUser);

router.patch('/profileUpdate', auth, userCtrl.profileUpdate);
router.post("/uploadCoverImg", multer, auth, userCtrl.uploadCoverImg);
router.post("/uploadAvatarImg", multer, auth, userCtrl.uploadAvatarImg);


module.exports = router;