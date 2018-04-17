const friendController = require('../../controllers/friend');
const config = require('../../config');

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
    
    friendController.reject(user_id, friend_id)
    .then((friendRejected) => {
        res
        .status(config.constants.OK)
        .json({
            message: friendRejected.message,
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
