const User = require('../../models/mysql/user');

module.exports = function(id) {
    if (!id) {
        Promise.reject(new Error('Id is required'));
    } else {
        return User.destroy( {
            where: {
                id,
            },
            force: true
        });
    };
};