const config = require('../../config');
const userController = require('../../controllers/user');
var bcrypt = require('bcrypt-nodejs');

module.exports = function (req, res) {
    const id = req.body.user.id;
    var userUpdate = {};

    if (req.body.email) {
        userUpdate.email = req.body.email;
    }
    if (req.body.firstname) {
        userUpdate.firstname = req.body.firstname;
    }
    if (req.body.lastname) {
        userUpdate.lastname = req.body.lastname;
    }
    if (req.body.password) {
        userUpdate.password = bcrypt.hashSync(req.body.password);
    }

    userController.update(id, userUpdate)
        .then((result) => {
            res
                .status(config.constants.OK)
                .json({
                    message: "Successful update",
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
