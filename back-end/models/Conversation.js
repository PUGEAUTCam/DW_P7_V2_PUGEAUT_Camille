const mongoose = require('mongoose');

const ConversationsSchema = mongoose.Schema({
    senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    receiverId: { type: String }
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Conversation', ConversationsSchema);



// const mongoose = require('mongoose');

// const ChatMessagesSchema = mongoose.Schema({
//     userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, },
//     receiverId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, },
//     message: { type: String }
// },
//     {
//         timestamps: true
//     }
// );

// module.exports = mongoose.model('ChatMessages', ChatMessagesSchema);
