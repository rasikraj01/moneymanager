const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) return res.status(401).send('access denied')

    try{
        const verified = jwt.verify(token, process.env.AUTH_TOKEN_SECRET)
        req.user = verified;
        next();
    }
    catch (err) {
        res.send("invalid token").status(400)
    }
}

module.exports = authenticate;