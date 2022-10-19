//Hash password
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

//Import user model 
const UserModel = require('../models/User');



exports.signup = (req, res, next) => {

    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new UserModel({
                name: req.body.name,
                firstname: req.body.firstname,
                pseudo: req.body.pseudo,
                email: req.body.email,
                password: hash
            });
            user.save()
                .then(() => res.status(201).json({ message: `User created and registered in the database` }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};


exports.login = (req, res, next) => {

    UserModel.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: "login_refused", message: 'Email ou mot de passe incorrect' });
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: "login_refused", message: 'Email ou mot de passe incorrect' });
                    }
                    res.status(200).json({
                        //user._id : donnees MongoDB
                        userId: user._id,
                        //Mise en place des tokens grace a la fonction sign de JWT 
                        token: jwt.sign(
                            { userId: user._id },
                            process.env.ACCESS_TOKEN_SECRET,
                            { expiresIn: '24h' }
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};


exports.me = (req, res, next) => {

    try {
        const token = req.headers.authorization.split(' ')[1];

        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        const userId = decodedToken.userId;

        if (!decodedToken) {
            return res.status(401).json({ error: 'Invalid token', message: 'Invalid token' });
        }
        UserModel.findOne({ _id: userId })
            .then(user => res.status(200).json({
                user: {
                    _id: user._id,
                    firstname: user.firstname,
                    pseudo: user.pseudo,
                    name: user.name,
                    email: user.email,
                }
            }))
            .catch(error => res.status(401).json({ error }))

    } catch (error) {
        res.status(402).json({ error });
    }
};
