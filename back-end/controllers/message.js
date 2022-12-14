const Messages = require("../models/Message");

//add new message
exports.createNewMessage = async (req, res, next) => {
    const newMessage = new Messages(req.body)

    newMessage.save()
        .then(newMessage => newMessage.populate("senderId", "name firstname avatar"))
        .then(() => res.status(200).json({ message: 'Message registered in database', newMessage }))
        .catch(error => res.status(400).json({ error }));
};

//get messages 
exports.getMessages = async (req, res, next) => {
    Messages.find({ conversationId: req.params.conversationId })
        .populate({ path: 'senderId', select: 'name firstname avatar' })
        .then((messages) => res.status(200).json(messages))
        .catch(error => res.status(400).json({ error }));
};















// const ChatMessages = require("../models/Conversation")

// exports.createMessage = async (req, res) => {
//     const data = req?.body

//     if (!data?.receiverId || !data.message) {
//         return res.status(403).json({ error: "required: [userId, receiverId, message]" })
//     }
//     new ChatMessages({ ...data, userId: req.auth.userId }).save()
//         .then((resMessage) => res.status(201).json({ message: 'Message registered in database', resMessage }))
//         .catch(error => {
//             res.status(400).json(error.response)
//         });
// }

// exports.getConversations = async (req, res) => {
//     const userId = req.auth.userId

//     // const result = ChatMessages.find({
//     //     $or: [{ userId: userId }, { receiverId: userId }
//     //     ]
//     // }).then(res => console.log(res))

//     ChatMessages.aggregate(
//         {
//             $match: { userId: userId }
//         },
//         {
//             $group: {
//                 _id: "$receiverId",
//                 total: { $sum: 1 }
//             }
//         }
//     ).then(res => console.log(res))


//     return res.status(200).json("OK")
// }

