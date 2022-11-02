const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    userId: { type: String, required: true },
    name: { type: String, required: true },
    avatar: { type: String },
    message: { type: String },
    imageUrl: { type: String },
    likes: { type: Number, default: 0 },
    usersLiked: { type: [] },
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Post', postSchema);








