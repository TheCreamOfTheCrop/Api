const config = require('../../config');
const friendController = require('../../controllers/friend');

module.exports = function(req, res) {
    if (!req.user.id) {
        return res
        .status(config.constants.BAD_REQUEST)
        .json({
            message: "user id is required",
            success: false
        })
    }
    
    if (!req.body.friend_id) {
        return res
        .status(config.constants.BAD_REQUEST)
        .json({
            message: "friend id is required",
            success: false
        })
    }

    const user_id = req.user.id;
    const friend_id = req.body.friend_id;
    
    friendController.remove(user_id, friend_id)
    .then((friendRemoved) => {
        res
        .status(config.constants.OK)
        .json({
            message: friendRemoved.message,
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
