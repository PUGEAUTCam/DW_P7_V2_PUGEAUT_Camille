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
    Post.find()
        .then(posts => res.status(200).json(posts))
        .catch(error => res.status(400).json({ error }));
};

exports.getUserPosts = (req, res, next) => {
    Post.find({ userId: req.auth.userId })
        .then(posts => res.status(200).json(posts))
        .catch(error => res.status(404).json({ error }));
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

// exports.likeSauce = (req, res, next) => {
//     let like = req.body.like;
//     let userId = req.body.userId;

//     Sauce.findOne({ _id: req.params.id })

//         .then((sauce) => {

            
//                 Sauce.updateOne({ _id: req.params.id }, { $inc: { likes: 1 }, $addToSet: { usersLiked: userId } })
//                     .then(() => res.status(200).json({ message: 'User et like pris en compte et ajoutee a la BDD' }))
//                     .catch(error => res.status(500).json({ message: 'erreur' }))
            

//             else if (like === -1) {
//                 Sauce.updateOne({ _id: req.params.id }, { $inc: { dislikes: 1 }, $addToSet: { usersDisliked: userId } })
//                     .then(() => res.status(200).json({ message: 'User et dislike pris en compte et ajoutee a la BDD' }))
//                     .catch(error => res.status(500).json({ message: 'erreur' }))
//             }

//         .catch((error) => {
//             res.status(500).json({ message: 'erreur' });
//         });
// };



