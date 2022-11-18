const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, },
    postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
    message: { type: String }
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Comment', commentSchema);
