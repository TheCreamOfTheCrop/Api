const config = require('../../config');
const userController = require('../../controllers/user');
var bcrypt = require('bcrypt-nodejs');
const User = require('../../models/mysql/user');


module.exports = function (req, res) {
    const id = req.user.id;
    var userUpdate = {};

    // We check if someone is already using this email in database
    if (req.body.email) {

        var email = req.body.email;
        return User.findOne({
            where: {
                email: email
            }
        })
            .then(handleUserResponse);

        function handleUserResponse(user) {
            if (user) {
                res.status(config.constants.BAD_REQUEST)
                    .json({
                        message: "Cette adresse email est déjà utilisée",
                        success: false
                    });
            } else {

                userUpdate.email = email;

                return continueWithPasswordChecking();
            }
        }
    } else {
        return continueWithPasswordChecking();
    }

    function continueWithPasswordChecking() {

        if (req.body.previousPassword && req.body.newPassword) {
            var previousPassword = bcrypt.hashSync(req.body.previousPassword);
            var newPassword = bcrypt.hashSync(req.body.newPassword);

            return User.findOne({
                where: {
                    id: id
                }
            })
                .then(handleUserResponse);

            function handleUserResponse(user) {
                if (!user) {
                    res.status(config.constants.BAD_REQUEST)
                        .json({
                            message: "Problème côté serveur, déconnectez-vous puis reconnectez-vous",
                            success: false
                        });
                } else {

                    if (user.password === previousPassword) {
                        userUpdate.password = newPassword;

                        return updateEverything();

                    } else {
                        res.status(config.constants.BAD_REQUEST)
                            .json({
                                message: "Mauvais mot de passe",
                                success: false
                            });
                    }
                }
            }
        } else {
            return updateEverything();
        }
    }

    function updateEverything() {
        if (req.body.firstname) {
            userUpdate.firstname = req.body.firstname;
        }
        if (req.body.lastname) {
            userUpdate.lastname = req.body.lastname;
        }

        userController.update(id, userUpdate)
            .then((result) => {
            res.status(config.constants.OK)
            .json({
                message: "Successful update",
                success: true
            })
    }).
        catch((err) => {
            res
            .status(config.constants.BAD_REQUEST)
            .json({
                message: err.message || err,
                success: false
            });
    })
        ;
    }


};
