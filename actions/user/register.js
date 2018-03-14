const config = require('../../config');
const userController = require('../../controllers/user');

module.exports = function (req, res) {
    if (!req.body.email || !req.body.password || !req.body.lastname || !req.body.firstname) {
        res
            .status(config.constants.BAD_REQUEST)
            .json({
                message: " Some Informations are missing !",
                success: false
            })
    }

    const email = req.body.email;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const password = req.body.password;

    userController.register(email, password, ,lastname, firstname)
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
            ress
                .status(config.constants.BAD_REQUEST)
                .json({
                    message: err.message || err,
                    success: false
                });
        });
};
