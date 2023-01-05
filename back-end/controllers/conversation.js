const Conversations = require("../models/Conversation");

//new conversation
exports.createNewConversation = (req, res, next) => {
    const newConversation = new Conversations({
        senderId: req.body.senderId,
        receiverId: req.body.receiverId,
    });
    newConversation.save()
        .then(newConversation => newConversation.populate([
            { path: 'senderId', select: 'name firstname avatar' },
            { path: 'receiverId', select: 'name firstname avatar' }
        ]))
        .then(() => res.status(200).json({ message: 'Conversation registered in database', newConversation }))
        .catch(error => res.status(400).json({ error }));
};

//get conv of a user 
exports.getConversation = (req, res, next) => {
    Conversations.find({
        $or: [
            { receiverId: req.params.userId },
            { senderId: req.params.userId }
        ]
    })
        .populate([{ path: 'senderId', select: 'name firstname avatar' },
        { path: 'receiverId', select: 'name firstname avatar' }])
        .then((conversations) => res.status(200).json(conversations))
        .catch(error => res.status(400).json({ error }));
};
