const Post = require('../models/Post');
const fs = require('fs');

exports.createPost = (req, res, next) => {
    console.log(req.body)
    const postBody = req.body;
    delete postBody._id;
    delete postBody._userId;

    const post = new Post({
        ...postBody,
        userId: req.auth.userId,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
        likes: 0,
        dislikes: 0,
        usersLiked: [],
        usersDisliked: [],

    });
    thing.save()
        .then(() => res.status(201).json({ message: 'Post registered in database' }))
        .catch(error => res.status(400).json({ error }));
};



// exports.createPost = (req, res, next) => {
//     const postBody = JSON.parse(req.body.post);
//     delete postBody._id;
//     delete postBody._userId;
//     const post = new Post({
//         ...postBody,s
//         userId: req.auth.userId, // On remplace l'Id de la req par celui du token
//         imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
//         likes: 0,
//         dislikes: 0,
//         usersLiked: [],
//         usersDisliked: [],
//     });

//     post.save()
//         .then(() => { res.status(201).json({ message: 'Post registered in BDD' }) })
//         .catch(error => { res.status(400).json({ error }) })
// };

