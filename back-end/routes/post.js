const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer-config');

const postCtrl = require('../controllers/post');

router.post('/', auth, multer, postCtrl.createPost);
router.get('/', auth, postCtrl.getAllPosts);
router.get('/userPosts', auth, postCtrl.getUserPosts);
router.get('/likedPosts', auth, postCtrl.getLikedPosts);
router.delete('/:id', auth, postCtrl.deletePost);
router.patch('/:id', auth, multer, postCtrl.modifyOnePost);
router.post('/like', auth, postCtrl.likePost);


module.exports = router;