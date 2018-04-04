const User = require('../../models/mysql/user');
const deleteSession = require('./deleteSession');

module.exports = function(res, req){
	
if(!req.headers.authorization) {
        return Promise.reject(new Error("No session exist"));
    } else {
        deleteSession(res);
        return Promise.resolve({
            message: 'Session Closed'
        });
    }

}
