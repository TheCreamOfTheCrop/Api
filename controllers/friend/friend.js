const Friend = require('../../models/mysql/friend');

module.exports = function(user_id){
    
    if (!user_id) {
        return Promise.reject(new Error('user id is required'));
    }
    
    return Friend.findAll({
        where: {
            $or: [{ user_id: user_id }, { friend_id: user_id }],
            status: 'accepted'
        },
    })
    .then(handleFindFriendResponse);
    
    function handleFindFriendResponse(friend) {
        if (!friend[0]) {
            return Promise.reject(new Error("No friend found"));
        } 
        else {
            return friend;
        } 
    }
}
