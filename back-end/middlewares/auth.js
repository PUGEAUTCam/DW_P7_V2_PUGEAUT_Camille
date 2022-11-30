const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = async (req, res, next) => {
    try {
        //Split bearer 
        const token = req.headers.authorization.split(' ')[1];

        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        const userId = decodedToken.userId;

        let user = await User.findById(userId)
            .then((user) => user)
            .catch((error) => res.status(500).json({ error }));

        req.auth = {
            userId: userId,
            isAdmin: user.isAdmin,
        }
        next();
    } catch (error) {
        res.status(401).json({ error });
    }
};



