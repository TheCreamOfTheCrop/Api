const jwt = require('jwt-simple');
const User = require('../../models/mysql/user');
const config = require('../../config');
const createSession = require('./createSession');
const deleteSession = require('./deleteSession');

module.exports = function(req, res, next){
    const token = req.headers.Authorization;
    if (token) {
        const decoded = jwt.decode(token, config.env.token.secret);
        if (decoded.exp <= Date.now()) {
            deleteSession(res);
            res.end('Access token has expired', 400);
        } else {
            User.findOne({
              where: {
                  uid: decoded.iss
              }
            })
            .then(handleUserSessionResponse)
        }
    } else {
        res.end('You need to be connected to access api', 400);
    }
    function handleUserSessionResponse(user) {
        if (!user) {
            res.end('This user doesn\'t exist', 400);
        } else {
            createSession(user, res);
            req.body.user = user.dataValues;
            return next();
        }
    }
}