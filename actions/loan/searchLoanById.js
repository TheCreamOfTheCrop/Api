const loanController = require('../../controllers/loan');
const config = require('../../config');

module.exports = function(req, res) {
    
    if (!req.body.id_loan) {
        return res
        .status(config.constants.BAD_REQUEST)
        .json({
            message: "loan id is required",
            success: false
        })
    }

    const id_loan = req.body.id_loan;
    
    loanController.searchLoanById(id_loan)
    .then((loan) => {
        res
        .status(config.constants.OK)
        .json({
            loan,
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
