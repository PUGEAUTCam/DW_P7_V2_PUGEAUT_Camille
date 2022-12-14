const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema({
    conversationId: { type: String },
    senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    text: { type: String },
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Message', MessageSchema);
