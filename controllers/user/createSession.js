const jwt = require('jwt-simple');
const config = require('../../config');
const moment = require('moment');

module.exports = function(user){
	var userInfo = {};
    const expires = moment().add(12, 'MM').valueOf();
    const token = jwt.encode({
        iss: user.uid,
        exp: expires,
        payload: user
    }, config.env.token.secret);
	
	userInfo.token = token;
	userInfo.user = user;
    return userInfo;
}
