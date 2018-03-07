const jwt = require('jwt-simple');
const config = require('../../config');
const moment = require('moment');

module.exports = function(user, res){
    const expires = moment().add(15, 'm').valueOf();
    const token = jwt.encode({
        iss: user.uid,
        exp: expires
    }, config.env.token.secret);
    res.cookie('accessTokenLibrarize', token, { maxAge: config.env.cookie.expires, httpOnly: true });
}