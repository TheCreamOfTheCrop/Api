const config = require('../../config');
const RefundController = require('../../controllers/refund');

module.exports = function(req, res) {
    if (!req.body.amount) {
        res
        .status(config.constants.BAD_REQUEST)
        .json({
            message: "Missing amount on refund",
            success: false
        })
    }

    const amount = req.body.amount;
    const loan_id = req.body.loan_id;


    RefundController.add(amount, loan_id)
        .then((refund) => {
        res
        .status(config.constants.OK)
        .json({
            refund,
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
