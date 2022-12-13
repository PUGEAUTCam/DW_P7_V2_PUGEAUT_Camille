const Conversations = require("../models/Conversation");

//new conversation
exports.createNewConversation = async (req, res, next) => {
    const newConversation = new Conversations({
        members: [req.body.senderId, req.body.receiverId],
    });

    try {
        const savedConversation = await newConversation.save()
        res.status(200).json(savedConversation);

    } catch (err) {
        res.status(500).json(err);
    }
};

//get conv of a user 
exports.getConversation = async (req, res, next) => {
    try {
        const conversation = await Conversations.find({
            members: { $in: [req.params.userId] }
        });
        res.status(200).json(conversation);

    } catch (err) {
        res.status(500).json(err);
    }
};
