const jwt = require('jsonwebtoken');

module.exports = function authenticate(req, res, next) {
    const token = req.header('auth-token');
    if (!token) return res.status(401).send('access denied')

    try{
        const verified = jwt.verify(token, process.env.AUTH_TOKEN_SECERT)
        req.user = verified;
        next();
    }
    catch (err) {
        res.send("invalid token").status(400)
    }
}
