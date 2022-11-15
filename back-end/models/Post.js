const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const postSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, },
    message: { type: String },
    imageUrl: { type: String },
    likes: { type: Number, default: 0 },
    usersLiked: { type: [] },
},
    {
        timestamps: true
    }
);

postSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Post', postSchema);








