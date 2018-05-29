const config = require('../../config');
const loanController = require('../../controllers/loan');

module.exports = function(req, res) {
    var loanUpdate = {};
    let loan_id;

    if (!req.body.id_loan) {
        res
            .status(config.constants.BAD_REQUEST)
            .json({
                message: "missing the loan id",
                success: false
            })
    }

    loan_id = req.body.id_loan;

    if (req.body.amount) {
        loanUpdate.amount = req.body.amount;
    }
    if (req.body.description) {
        loanUpdate.description = req.body.description;
    }
    if (req.body.rate) {
        loanUpdate.rate = req.body.rate;
    }
    if (req.body.delay) {
        loanUpdate.delay = req.body.delay;
    }
    if (req.body.loan_type) {
        loanUpdate.loan_type = req.body.loan_type;
    }
    if (req.body.user_provider_id) {
        loanUpdate.user_provider_id = req.body.user_provider_id;
    }

    loanController.updateLoan(loan_id, loanUpdate)
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
            message:err.message || err,
            success: false
        });
});
};
