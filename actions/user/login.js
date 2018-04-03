const config = require('../../config');
const userController = require('../../controllers/user');
const createSession = require('../../controllers/user/createSession');

module.exports = function (req, res) {
    if (!req.body.email || !req.body.password) {
      return res
            .status(config.constants.BAD_REQUEST)
            .json({
                message: "Email and password are require",
                success: false
            })
    }

    const email = req.body.email;
    const password = req.body.password;


    userController.login(email, password)
        .then((result) => {
          return res
                .status(config.constants.OK)
                .json({
                    result,
                    message: "successful connexion",
                    success: true
                });

        })
        .catch((err) => {
          return res
                .status(config.constants.BAD_REQUEST)
                .json({
                    message: err.message || err,
                    success: false
                });
        });
};
