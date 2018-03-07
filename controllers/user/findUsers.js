const User = require('../../models/mysql/user');

module.exports = function(friendFind) {
    return User.findAll({
        where: friendFind
    });
};