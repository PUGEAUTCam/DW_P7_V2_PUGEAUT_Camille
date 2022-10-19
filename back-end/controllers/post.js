exports.createPost = (req, res, next) => {
    const sauceBody = JSON.parse(req.body.sauce);
    delete sauceBody._id;
    delete sauceBody._userId;
    const sauce = new Sauce({
        ...sauceBody,
        userId: req.auth.userId, // On remplace l'Id de la req par celui du token
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
        likes: 0,
        dislikes: 0,
        usersLiked: [],
        usersDisliked: [],
    });

    sauce.save()
        .then(() => { res.status(201).json({ message: 'Sauce enregistrée' }) })
        .catch(error => { res.status(400).json({ error }) })
};