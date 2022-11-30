const Post = require('../models/Post');
const fs = require('fs');

exports.createPost = async (req, res, next) => {
    const postBody = req.body

    const post = new Post({
        ...postBody,
        userId: req.auth.userId,
        imageUrl: req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}` : '',
    });
    post.save()
        .then(post => post.populate("userId", "name firstname avatar"))
        .then(() => res.status(201).json({ message: 'Post registered in database', post }))
        .catch(error => res.status(400).json({ error }));
};


exports.getAllPosts = (req, res, next) => {
    Post.paginate({}, {
        page: Number(req.query.page),
        sort: { createdAt: -1 },
        populate: [
            { path: "userId", select: ["name", "firstname", "avatar"] },
            {
                path: 'comments', populate: {
                    path: 'userId',
                    model: 'User',
                    select: 'name firstname avatar'
                }
            }
        ]
    })
        .then(posts => res.status(200).json(posts))
        .catch(error => res.status(400).json({ error }));
};

exports.getUserPosts = (req, res, next) => {
    let userId = req.query.id ? req.query.id : req.auth.userId
    Post.find({ userId: userId })
        .sort({ createdAt: -1 })
        .populate([{ path: 'userId', select: 'name firstname avatar' }, {
            path: "comments", populate: {
                path: 'userId',
                model: 'User',
                select: 'name firstname avatar'
            }
        }])
        .then(posts => res.status(200).json(posts))
        .catch(error => res.status(400).json({ error }));
};

exports.getLikedPosts = (req, res, next) => {
    Post.find({ usersLiked: req.auth.userId })
        .sort({ createdAt: -1 })
        .populate([{ path: 'userId', select: 'name firstname avatar' }, {
            path: "comments", populate: {
                path: 'userId',
                model: 'User',
                select: 'name firstname avatar'
            }
        }])
        .then(posts => res.status(200).json(posts))
        .catch(error => res.status(400).json({ error }));
};

exports.deletePost = (req, res, next) => {
    Post.findOne({ _id: req.params.id })
        .then(post => {
            if (post.userId != req.auth.userId && req.auth.isAdmin != true) {
                res.status(403).json({ message: 'Not authorized' });
            } else {
                //it's the same 
                const filename = post.imageUrl.split('/images/')[1];
                //Pour supp du dossier img le fichier
                fs.unlink(`images/${filename}`, () => {
                    Post.deleteOne({ _id: req.params.id })
                        .then(() => { res.status(200).json({ message: 'Post supprimé', postId: req.params.id }) })
                        .catch(error => res.status(401).json({ error }));
                });
            }
        })
        .catch(error => {
            res.status(500).json({ error });
        });
};

//LIKE
exports.likePost = (req, res, next) => {
    let postId = req.body.postId;
    let userId = req.auth.userId;

    Post.findOne({ _id: postId })
        .then((post) => {
            if (!post.usersLiked.includes(userId)) {
                Post.updateOne({ _id: postId }, { $inc: { likes: 1 }, $addToSet: { usersLiked: userId } })
                    .then(() => res.status(200).json({ message: 'User ajouté au tableau like et like pris en compte', postId: postId, user: userId }))
                    .catch(error => res.status(403).json({ error }))
            }
            else if (post.usersLiked.includes(userId)) {
                Post.updateOne({ _id: postId }, { $inc: { likes: -1 }, $pull: { usersLiked: userId } })
                    .then(() => res.status(200).json({ message: 'User supprimé du tableau like et dislike pris en compte', postId: postId, user: userId }))
                    .catch(error => res.status(403).json({ error }))
            }
        })
        .catch((error) => {
            res.status(500).json({ error });
        });
};

exports.modifyOnePost = (req, res, next) => {
    const deleteImage = req.body?.deleteImage === "true"

    Post.findOne({ _id: req.params.id })
        .then((post) => {
            if (post.userId != req.auth.userId) {
                res.status(403).json({ message: 'Not authorized' });
            }
            else {
                if (req.file || deleteImage) {
                    const filename = post.imageUrl.split('/images/')[1];
                    if (filename) {
                        // On supprime l'ancienne image de la BDD
                        fs.unlink(`images/${filename}`, (err) => {
                            if (err) throw err;
                        });
                    };
                }

                const postBody = {
                    ...req.body,
                    imageUrl: req?.file
                        ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
                        : deleteImage
                            ? ""
                            : post.imageUrl
                }

                Post.updateOne({ _id: req.params.id }, postBody)
                    .then(() => res.status(200).json({ message: 'Post modifiée', post: postBody, id: req.params.id }))
                    .catch(error => {
                        res.status(400).json({ error })
                    });
            }
        })
        .catch((error) => {
            console.log(error);
            res.status(400).json({ error });
        });
};







