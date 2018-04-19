const config = require('../../config');
const friendController = require('../../controllers/friend');

module.exports = function(req, res) {
    if (!req.body.friend_id) {
        return res
        .status(config.constants.BAD_REQUEST)
        .json({
            message: "friend id is require",
            success: false
        })
    }
    if (!req.user.id) {
        return res
        .status(config.constants.BAD_REQUEST)
        .json({
            message: "user id is required",
            success: false
        })
    }
    
    if (req.body.friend_id == req.user.id) {
        return res
        .status(config.constants.BAD_REQUEST)
        .json({
            message: "user id and friend id can't be the same",
            success: false
        })
    }

    const friend_id = req.body.friend_id;
    const user_id = req.user.id;
    
    friendController.add(friend_id, user_id)
    .then((friend) => {
        res
        .status(config.constants.OK)
        .json({
            message: "friend request sent",
            success: true
        });
    })
    .catch((err) => {
        res
        .status(config.constants.BAD_REQUEST)
        .json({
            message:err.message || err,
            success: false
        });
    });
};
