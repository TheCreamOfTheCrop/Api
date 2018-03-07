const config = require('../../config');
const userController = require('../../controllers/user');

module.exports = function(req, res) {
    if (!req.body.token) {
        res
        .status(config.constants.BAD_REQUEST)
        .json({
            message: "token is required",
            success: false
        })
    }
    if (!req.body.password) {
        res
        .status(config.constants.BAD_REQUEST)
        .json({
            message: "new password is required",
            success: false
        })
    }

    const token = req.body.token;
    const newPass = req.body.password;

    userController.resetPassword(token, newPass)
    .then((result) => {
        res
        .status(config.constants.OK)
        .json({
            message: "Password reset",
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
