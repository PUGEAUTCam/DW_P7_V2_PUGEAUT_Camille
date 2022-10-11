//Hash password
const bcrypt = require('bcrypt');

//Import user model 
const UserModel = require('../models/User');



exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new UserModel({
                email: req.body.email,
                password: hash
            });
            user.save()
                .then(() => res.status(201).json({ message: `Utilisateur crée et enregistré dans la BDD` }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};




// exports.login = (res, req, next) => {

// };