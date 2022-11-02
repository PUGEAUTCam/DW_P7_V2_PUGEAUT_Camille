const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer-config');

const postCtrl = require('../controllers/post');

router.post('/', auth, multer, postCtrl.createPost);

router.get('/', auth, postCtrl.getAllPosts);

router.get('/userPosts', auth, postCtrl.getUserPosts);

router.delete('/:id', auth, postCtrl.deletePost);

router.post('/like', auth, postCtrl.likePost);

module.exports = router;