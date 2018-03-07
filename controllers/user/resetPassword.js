const User = require('../../models/mysql/user');
const SendMail = require('./SendMail');
const jwt = require('jwt-simple');
const config = require('../../config');
var bcrypt = require('bcrypt-nodejs');

module.exports = function(token, newPass){
    if (!token) {
        console.log("token" + token);
        return Promise.reject(new Error('token is required'));
    }
    if (!newPass) {
        return Promise.reject(new Error('new password is required'));
    }
    
    const decoded = jwt.decode(token, config.env.token.secret);
    if (decoded.exp <= Date.now()) {
        return Promise.reject(new Error('token has expired'));
    } else {
        var hashedPassword = bcrypt.hashSync(newPass);
        return User.update({
                newPass: hashedPassword,
            },
            {
                where: {
                    id: decoded.iss
                }
        })
        .then(handleResetPasswordResponse);
    }
        
    function handleResetPasswordResponse(result) {
        if (result[0] == 0) {
            return Promise.reject(new Error("Couldn't change password"));
        } else {
            return result;
        }
    }
  }
