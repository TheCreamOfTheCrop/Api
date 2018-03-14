const User = require('../../models/mysql/user');
var bcrypt = require('bcrypt-nodejs');

module.exports = function (email, password, lastname, firstname){
    if (!email || !password || !lastname || !firstname) {
        return Promise.reject(new Error('Email and password are require'));
    }
    
    var hashedPassword = bcrypt.hashSync(password);
    
    return User.create({
        email,
        firstname,
        lastname,
        password: hashedPassword,
    })
    .then(handleUserResponse);

    function handleUserResponse(user) {
        if (!user) {
            return Promise.reject(new Error("Can't create user"));
        } else {
            return user;
        }
    }
}
