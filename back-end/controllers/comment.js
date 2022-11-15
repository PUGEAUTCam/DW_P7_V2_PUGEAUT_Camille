const Comment = require("../models/Comment");

exports.createComment = async (req, res, next) => {
    const commentBody = req.body

    const comment = new Comment({
        ...commentBody,
        userId: req.auth.userId,
    });
    comment.save()
        .then(comment => comment.populate("userId", "name firstname avatar"))
        .then(() => res.status(201).json({ message: 'Comment registered in database', comment }))
        .catch(error => res.status(400).json({ error }));
};