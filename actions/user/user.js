const config = require('../../config');
const userController = require('../../controllers/user');

module.exports = function (req, res) {

    if (!req.body.id) {
        return res
            .status(config.constants.BAD_REQUEST)
            .json({
                message: "Id is require",
                success: false
            })
    }
    const id = req.body.id;

    userController.user(id)
        .then((user) => {
            res
                .status(config.constants.OK)
                .json({
                    user,
                    message: "user successfuly recovered",
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
