const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

const chatMessagesCtrl = require('../controllers/chatMessages');

router.post('/', auth, chatMessagesCtrl.createMessage);
router.get("/conversations", auth, chatMessagesCtrl.getConversations);

module.exports = router;
