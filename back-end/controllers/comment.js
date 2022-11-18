const Comment = require("../models/Comment");
const Post = require('../models/Post');

exports.createComment = async (req, res, next) => {
    const comment = new Comment({
        message: req.body.message,
        userId: req.auth.userId,
        postId: req.body.postId,
    });

    comment.save()
        .then((commentRes) => {
            Post.findByIdAndUpdate(
                req.body.postId,
                { $push: { comments: commentRes._id } },
                { new: true, useFindAndModify: false }
            ).then(() => res.status(201).json({ message: 'Comment registered in database', comment }))
        })
        .catch(error => res.status(400).json({ error }));
};
