const jwt = require('jwt-simple');
const User = require('../../models/mysql/user');
const config = require('../../config');
const createSession = require('./createSession');
const deleteSession = require('./deleteSession');

module.exports = function(req, res, next){
    const token = req.headers.authorization;
    if (token) {
        const decoded = jwt.decode(token, config.env.token.secret);
        console.log(decoded);
        if (decoded.exp <= Date.now()) {
          return res.end('Access token has expired', 400);
        }
        req.user = decoded.payload;
        return next();
    } else {
        return res.end('You need to be connected to access api', 400);
    }
}
