const Friend = require('../../models/mysql/friend');

module.exports = function(user_id, friend_id, block){
    
    if (!user_id) {
        return Promise.reject(new Error('user id is required'));
    }
    
    if (!friend_id) {
        return Promise.reject(new Error('friend id is required'));
    }
    
    return Friend.update({
        status: 'rejected'
    }, 
    {
        where: {
            user_id: friend_id,
            friend_id: user_id,
            status: 'request'
        },
    })
    .then(handleRequestRejectResponse);
    
    function handleRequestRejectResponse(reject) {
        if (reject[0] == 0) {
            return Promise.reject(new Error("friend request not found"));
        } 
        else {
            var message = "Request rejected";
            if (block) {
                message += " and blocked";
            }
            return {
                message: message,
            };
        } 
    }
}
