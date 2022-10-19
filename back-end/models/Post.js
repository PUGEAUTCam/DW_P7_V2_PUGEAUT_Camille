const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    userId: { type: String, required: true },
    message: { type: String, required: true },
    imageUrl: { type: String },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    usersLiked: { type: [] },
    usersDisliked: { type: [] },
});


//On exporte le model pour enregistrer nos sauces selon le shema cree
module.exports = mongoose.model('Post', postSchema);








