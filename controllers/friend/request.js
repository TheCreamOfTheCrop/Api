const Friend = require('../../models/mysql/friend');

module.exports = function(user_id){
    
    if (!user_id) {
        return Promise.reject(new Error('user id is required'));
    }
    
    return Friend.findAll({
        where: {
            friend_id: user_id,
            status: 'request'
        },
    })
    .then(handleFindRequestResponse);
    
    function handleFindRequestResponse(request) {
        if (!request[0]) {
            return Promise.reject(new Error("No friend request was found"));
        } 
        else {
            return request;
        } 
    }
}
