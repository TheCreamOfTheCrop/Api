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

    const user_id = req.user.id;
    
    friendController.friend(user_id)
    .then((friend) => {
        res
        .status(config.constants.OK)
        .json({
            friend,
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
