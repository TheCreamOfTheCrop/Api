const Friend = require('../../models/mysql/friend');


module.exports = function(friend_id, user_id){
    if (!friend_id) {
        return Promise.reject(new Error('friend id is required'));
    }
    if (!user_id) {
        return Promise.reject(new Error('user id is required'));
    }
    if (friend_id == user_id) {
        return Promise.reject(new Error('user id and friend id can\'t be the same'));
    }

    return Friend.findOrCreate({
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
            status: {
                $ne: 'rejected',
            }
        },
        defaults: {
            user_id: user_id,
            friend_id: friend_id,
            status: 'request',
        }
    })
    .then(handleFindOrCreateFriendResponse);

    function handleFindOrCreateFriendResponse(friend) {
		
        const newFriend = friend[0]; //récuperer le json de l'amis créer ou de l'ami qui existait déja
        const created = friend[1]; // valeur qui est vrai ou faux et si c'est vrai cela retourne les valeurs de l'ami
        if (created) {
            return newFriend.dataValues;
        } else if (newFriend.dataValues.status == 'request') {
            return Promise.reject(new Error("A friend request already exists with this user"));
        } else if (newFriend.dataValues.status == 'accepted') {
            return Promise.reject(new Error("You Are already friend with this user"));
        }
        else {
            return Promise.reject(new Error("A problem occured while adding friend"));
        }
    }
}
