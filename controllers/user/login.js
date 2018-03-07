const User = require('../../models/mysql/user');
const createSession = require('./createSession');
var bcrypt = require('bcrypt-nodejs');

module.exports = function(email, password, res){
    if (!email || !password) {
        return Promise.reject(new Error('email and password are required'));
    }

    return User.findOne({
      where: {
          email: email
        }
    })
    .then(handleUserResponse);
    
    function handleUserResponse(user) {
        if (!user) {
            
        } else {
            if (bcrypt.compareSync(password, user.password)) {
                createSession(user, res);
                return user;
            } else {
                return Promise.reject(new Error("Wrong password"));
            }
            
        }
    }
}
