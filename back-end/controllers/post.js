const Post = require('../models/Post');

exports.createPost = (req, res, next) => {
    const postBody = req.body

    const post = new Post({
        ...postBody,
        userId: req.auth.userId,
        imageUrl: req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}` : '',
    });
    post.save()
        .then(() => res.status(201).json({ message: 'Post registered in database' }))
        .catch(error => res.status(400).json({ error }));
};

