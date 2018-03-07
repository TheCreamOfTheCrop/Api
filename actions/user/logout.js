const config = require('../../config');
const userController = require('../../controllers/user');

module.exports = function (req, res) {
    userController.logout(res, req)
        .then((response) => {
            res
                .status(config.constants.OK)
                .json({
                    message: response.message,
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
