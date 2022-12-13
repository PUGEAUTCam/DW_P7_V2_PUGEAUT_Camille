const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

//Import conversation middlewares
const ConversationsCtrl = require('../controllers/conversation');
//CRUD
router.post('/conversations/', auth, ConversationsCtrl.createNewConversation);
router.get('/conversations/:userId', auth, ConversationsCtrl.getConversation);

//Import message middlewares
const MessagesCtrl = require('../controllers/message');
//CRUD
router.post('/messages/', auth, MessagesCtrl.createNewMessage);
router.get('/messages/:conversationId', auth, MessagesCtrl.getMessages);


module.exports = router;




// router.post('/', auth, chatMessagesCtrl.createMessage);
// router.get("/conversations", auth, chatMessagesCtrl.getConversations);


