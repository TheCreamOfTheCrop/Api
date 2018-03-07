const User = require('../../models/mysql/user');
const createSession = require('./createSession');

module.exports = function(id){
    if (!id) {
        return Promise.reject(new Error('user must be connected'));
    }
    return User.findOne({
      where: {
          id: id,
        }
    })
    .then(handleUserResponse);
    
    function handleUserResponse(user) {
        if (!user) {
            return Promise.reject(new Error("Can't find user"));
        } else {
            return user;
        }
    }
}
