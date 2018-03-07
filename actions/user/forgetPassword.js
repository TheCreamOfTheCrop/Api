const config = require('../../config');
const userController = require('../../controllers/user');

module.exports = function (req, res) {
    if (!req.body.email) {
        res
            .status(config.constants.BAD_REQUEST)
            .json({
                message: "Email is require",
                success: false
            })
    }

    const email = req.body.email;


    userController.forgetPassword(email)
        .then((result) => {
            res
                .status(config.constants.OK)
                .json({
                    message: result.message,
                    success: true
                });
        })
        .catch((err) => {
            res
                .status(config.constants.BAD_REQUEST)
                .json({
                    message: err.message || err,
                    success: false
                });
        });
};
