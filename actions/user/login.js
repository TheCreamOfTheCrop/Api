const config = require('../../config');
const userController = require('../../controllers/user');

module.exports = function (req, res) {
    if (!req.body.email || !req.body.password) {
        res
            .status(config.constants.BAD_REQUEST)
            .json({
                message: "Email and password are require",
                success: false
            })
    }

    const email = req.body.email;
    const password = req.body.password;


    userController.login(email, password, res)
        .then((user) => {
            res
                .status(config.constants.OK)
                .json({
                    user,
                    message: "successful connexion",
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
