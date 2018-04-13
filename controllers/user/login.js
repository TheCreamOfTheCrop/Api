const User = require('../../models/mysql/user');
const createSession = require('./createSession');
var bcrypt = require('bcrypt-nodejs');

module.exports = function(email, password){
    let user;
    if (!email || !password) {
        return Promise.reject(new Error('email and password are required'));
    }

    return User.findOne({
      where: {
          email: email
        }
    })
    .then(u => user = u)
    .then(handleUserResponse)
    .then(retrieveToken)


    function handleUserResponse() {
        if (!user) {
            return Promise.reject(new Error("Wrong email or password"));
        }

        if (!bcrypt.compareSync(password, user.password)) {
          return Promise.reject(new Error("Wrong email or password"));
        }
    }

    function retrieveToken() {
        //console.log(user);
      return createSession(user);
    }

}
