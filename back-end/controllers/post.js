const Post = require('../models/Post');
const fs = require('fs');

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


exports.getAllPosts = (req, res, next) => {
    Post.paginate({}, { page: Number(req.query.page), sort: { createdAt: -1 } })
        .then(posts => res.status(200).json(posts))
        .catch(error => res.status(400).json({ error }));
};

exports.getUserPosts = (req, res, next) => {
    Post.paginate({ userId: req.auth.userId }, { sort: { createdAt: -1 } })
        .then(posts => res.status(200).json(posts))
        .catch(error => res.status(400).json({ error }));
};

exports.deletePost = (req, res, next) => {

    Post.findOne({ _id: req.params.id })
        .then(post => {

            if (post.userId != req.auth.userId) {
                res.status(403).json({ message: 'Not authorized' });
            } else {
                //it's the same 
                const filename = post.imageUrl.split('/images/')[1];
                //Pour supp du dossier img le fichier
                fs.unlink(`images/${filename}`, () => {
                    Post.deleteOne({ _id: req.params.id })
                        .then(() => { res.status(200).json({ message: 'Post supprimé' }) })
                        .catch(error => res.status(401).json({ error }));
                });
            }
        })
        .catch(error => {
            console.log(error);
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
                    .then(() => res.status(200).json({ message: 'User ajouté au tableau like et like pris en compte' }))
                    .catch(error => res.status(403).json({ error }))
            }
            else if (post.usersLiked.includes(userId)) {
                Post.updateOne({ _id: postId }, { $inc: { likes: -1 }, $pull: { usersLiked: userId } })
                    .then(() => res.status(200).json({ message: 'User supprimé du tableau like et dislike pris en compte' }))
                    .catch(error => res.status(403).json({ error }))
            }
        })
        .catch((error) => {
            res.status(500).json({ error });
        });
};

exports.modifyOnePost = (req, res, next) => {
    const postBody = { ...req.body, userId: req.auth.userId, imageUrl: req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}` : '' }

    Post.findOne({ _id: req.params.id })

        .then((post) => {
            if (post.userId != req.auth.userId) {
                res.status(403).json({ message: 'Not authorized' });
            }
            else {
                // On supprime l'ancienne image de la BDD
                const filename = post.imageUrl.split('/images/')[1];
                if (filename) {
                    fs.unlink(`images/${filename}`, (err) => {
                        if (err) throw err;
                    });
                };

                Post.updateOne({ _id: req.params.id }, { ...postBody, _id: req.params.id })
                    .then(() => res.status(200).json({ message: 'Post modifiée' }))
                    .catch(error => res.status(401).json({ error }));
            }
        })
        .catch((error) => {
            console.log(error);
            res.status(400).json({ error });
        });
};





