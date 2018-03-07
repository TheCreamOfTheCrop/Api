const User = require('../../models/mysql/user');

module.exports = function(id, userUpdate){
    if (!id) {
        return Promise.reject(new Error('user id is require'));
    }
    return User.update(
        userUpdate,
        {
            where: {
                id: id, 
            }
        }
    )
    .then(handleUserUpdateResponse);

    function handleUserUpdateResponse(result) {
        if (result[0] == 0) {
            return Promise.reject(new Error("Can't update user"));
        } else {
            return result;
        }
    }
}
