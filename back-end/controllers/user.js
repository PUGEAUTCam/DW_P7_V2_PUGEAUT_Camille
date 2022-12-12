//Hash password
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const fs = require('fs');
//Import user model 
const UserModel = require('../models/User');

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new UserModel({
                name: req.body.name,
                firstname: req.body.firstname,
                email: req.body.email,
                password: hash,
            });
            user.save()
                .then(() => res.status(201).json({ message: `User created and registered in the database` }))
                .catch(error => res.status(400).json({ error: error }));
        })
        .catch(error => res.status(500).json({ error }));
};

exports.profileUpdate = (req, res, next) => {
    const userInfo = req.body;
    let userId = req.auth.userId;

    UserModel.updateOne({ _id: userId }, userInfo)
        .then(() => res.status(200).json({ message: 'Profil mis a jour' }))
        .catch(error => res.status(400).json({ error }));
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
            // delete user.password
            .then(user => {
                delete user.password
                res.status(200).json({ user })
            })
            .catch(error => res.status(400).json({ error }))

    } catch (error) {
        res.status(402).json({ error });
    }
};

exports.getOneUser = (req, res, next) => {
    UserModel.findById(req.params.id)
        .then(user => {
            delete user.password
            res.status(200).json({ user })
        })

        .catch(error => res.status(400).json(console.log(error)))
};


exports.uploadCoverImg = (req, res, next) => {
    const coverImage = req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}` : '';
    UserModel.findOne({ _id: req.auth.userId })
        .then((user) => {
            if (user._id != req.auth.userId) {
                res.status(401).json({ message: 'Not authorized' });
            }
            else {
                // const filename = user.file.split('/images/')[1];
                // if (filename) {
                //     fs.unlink(`images/${filename}`, (err) => {
                //         if (err) throw err;
                //     });
                // };
                UserModel.updateOne({ _id: req.auth.userId }, { coverImg: coverImage })
                    .then(() => res.status(200).json({ message: 'Couverture de profil modifiée' }))
                    .catch(error => res.status(403).json({ error }));
            }
        })
        .catch((error) => {
            res.status(400).json({ error });
        });
};

exports.uploadAvatarImg = (req, res, next) => {
    const avatarImage = req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}` : '';

    UserModel.findOne({ _id: req.auth.userId })
        .then((user) => {
            if (user._id != req.auth.userId) {
                res.status(403).json({ message: 'Not authorized' });
            }
            else {
                // const filename = user.avatar.split('/images/')[1];
                // if (filename) {
                //     fs.unlink(`images/${filename}`, (err) => {
                //         if (err) throw err;
                //     });
                // };
                UserModel.updateOne({ _id: req.auth.userId }, { avatar: avatarImage })
                    .then(() => res.status(200).json({ message: 'avatar de profil modifié' }))
                    .catch(error => res.status(400).json({ error }));
            }
        })
        .catch((error) => {
            res.status(400).json({ error });
        });
};

exports.searchUser = (req, res, next) => {
    const search = req.query.letter;

    UserModel.find({
        $or:
            [
                { name: { $regex: search, $options: 'i' } },
                { firstname: { $regex: search, $options: 'i' } },
            ],
    })
        .then((result) => res.status(200).json({ result }))
        .catch(error => console.log(error));
};