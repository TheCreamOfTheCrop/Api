const config = require('../../config');
const NegociateController = require('../../controllers/negociate');
const Loan = require('../../models/mysql/user');
const Negociate = require('../../models/mysql/negociate');



module.exports = function(req, res) {

    const id = req.user.id;
    const id_loan = req.body.id_loan;
    var loanUpdate = {};

    if (req.body.amount) {
        loanUpdate.amount = req.body.amount;
    }
    if (req.body.rate) {
        loanUpdate.rate = req.body.rate;
    }
    if (req.body.delay) {
        loanUpdate.delay = req.body.delay;
    }
    if (req.body.user_provider_id) {
        loanUpdate.user_provider_id = req.body.user_provider_id;
    }

      loanUpdate.state_id = "en cours";

    NegociateController.accept(id_loan, loanUpdate)
    .then((nego) => {
        res
        .status(config.constants.OK)
        .json({
            message: "Successful update",
            success: true
        })
    })
    .catch((err) => {
        res
        .status(config.constants.BAD_REQUEST)
        .json({
            message:err.message || err,
            success: false
        });
    });



}
