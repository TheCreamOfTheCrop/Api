const config = require('../../config');
const RefundController = require('../../controllers/refund');


module.exports = function(req, res) {

    if (!req.body.loan_id) {
        res
            .status(config.constants.BAD_REQUEST)
            .json({
                message: "Missing loan_id reference",
                success: false
            })
    }

    const loan_id = req.body.loan_id;

    RefundController.getList(loan_id)
        .then((refunds) => {
        res
        .status(config.constants.OK)
        .json({
            refunds,
            success: true
        });
    }).catch((err) => {
        res
        .status(config.constants.BAD_REQUEST)
        .json({
            message:err.message || err,
            success: false
        });
    });

};
