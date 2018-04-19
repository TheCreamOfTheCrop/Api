const Friend = require('../../models/mysql/friend');

module.exports = function(user_id, friend_id){
    
    if (!user_id) {
        return Promise.reject(new Error('user id is required'));
    }
    
    if (!friend_id) {
        return Promise.reject(new Error('friend id is required'));
    }
    
    return Friend.destroy({
        where: {
            $or: [
                {
                    user_id: user_id,
                    friend_id: friend_id
                },
                {
                    user_id: friend_id,
                    friend_id: user_id
                }
            ],
            status: 'accepted'
        },
    })
    .then(handleRequestRemoveResponse);
    
    function handleRequestRemoveResponse(remove) {
        if (remove == 0) {
            return Promise.reject(new Error("friend remove request not found"));
        } 
        else {
            return {
                message: "Friend removed",
            };
        } 
    }
}
