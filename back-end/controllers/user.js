//Hash password
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cryptoJS = require('crypto-js');
require('dotenv').config();

//Import user model 
const UserModel = require('../models/User');



exports.signup = (req, res, next) => {
    const emailCryptoJS = cryptoJS.HmacSHA256(req.body.email, process.env.KEY_CRYPTO_JS).toString();

    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new UserModel({
                email: emailCryptoJS,
                password: hash
            });
            user.save()
                .then(() => res.status(201).json({ message: `User created and registered in the database` }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};


exports.login = (req, res, next) => {
    const emailCryptoJS = cryptoJS.HmacSHA256(req.body.email, process.env.KEY_CRYPTO_JS).toString();

    UserModel.findOne({ email: emailCryptoJS })
        .then(user => {
            if (!user) {
                return res.status(401).json({ message: 'Incorrect password or email' });
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ message: 'Incorrect password or email' });
                    }
                    res.status(200).json({
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

