const config = require('../../config');
const loanController = require('../../controllers/loan');
const Loan = require('../../models/mysql/user');


module.exports = function (req, res) {

    const id_loan = req.body.id_loan;
    var loanUpdate = {};
    loanUpdate.user_provider_id = req.user.id;
    loanUpdate.state_id = "en cours";
    loanUpdate.acceptationDate = Date.now();

    loanController.accept(id_loan, loanUpdate)
        .then((loan) => {
            res
                .status(config.constants.OK)
                .json({
                    message: "Loan has been fixed",
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


}
