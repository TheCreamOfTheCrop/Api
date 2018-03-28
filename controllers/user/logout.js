const User = require('../../models/mysql/user');
const deleteSession = require('./deleteSession');

module.exports = function(res, req){

        return Promise.resolve({
            message: 'Session Closed'
        });
}
