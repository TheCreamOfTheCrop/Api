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
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const password = req.body.password;

    userController.register(email, firstname, lastname, password)
        .then((user) => {
            res
                .status(config.constants.OK)
                .json({
                    user,
                    message: "Successful registration",
                    success: true
                })
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
