const User = require('../../models/mysql/user');
const createSession = require('./createSession');
var bcrypt = require('bcrypt-nodejs');

module.exports = function(email, password, res){
    if (!email || !password) {
		console.log('coucou');
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
			console.log('coucou1');
            return Promise.reject(new Error("Wrong email or password"));
        } else {
            if (bcrypt.compareSync(password, user.password)) {
				console.log('coucou2');
                res.send(createSession(user, res));
				console.log('coucou3');
                return user;
            } else {
                return Promise.reject(new Error("Wrong email or password"));
            }
            
        }
    }
}
