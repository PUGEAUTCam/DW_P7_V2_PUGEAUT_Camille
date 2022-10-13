const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        //Split bearer 
        const token = req.headers.authorization.split(' ')[1];

        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        const userId = decodedToken.userId;

        req.auth = {
            userId: userId
        };
        next();
    } catch (error) {
        res.status(401).json({ error });
    }
};

