const Friend = require('../../models/mysql/friend');

module.exports = function(user_id, friend_id){

    if (!user_id) {
        return Promise.reject(new Error('user id is required'));
    }

    if (!friend_id) {
        return Promise.reject(new Error('friend id is required'));
    }

    return Friend.update({
        status: 'accepted'
    },
    {
        where: {
            user_id: friend_id,
            friend_id: user_id,
            status: 'request'
        },
    })
    .then(handleRequestAcceptResponse);

    function handleRequestAcceptResponse(accept) {
        if (accept[0] == 0) {
            return Promise.reject(new Error("friend request not found"));
        }
        else {
            return {
                message: "Friend accepted",
            };
        }
    }
}
