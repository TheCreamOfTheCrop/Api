const User = require('../../models/mysql/user');
const SendMail = require('./SendMail');

module.exports = function(email){
    if (!email) {
        return Promise.reject(new Error('email is require'));
    }
    return User.findOne({
      where: {
          email: email,
        }
    })
    .then(handleUserResponse)
    .then(SendMail);


    function handleUserResponse(user) {
        if (!user) {
            return Promise.reject(new Error("Account doesn't exist"));
        } else {
            return {
                id: user.id,
                email: user.email
            }
        }
    }

  }
