const config = require('../../config');
const LoanController = require('../../controllers/loan');

module.exports = function(req, res) {

    if (!req.body.amount || !req.body.description || !req.body.rate || !req.body.user_id || !req.body.delay) {
        res
        .status(config.constants.BAD_REQUEST)
        .json({
            message: "missing informations to create the loan",
            success: false
        })
    }

    const amount = req.body.amount;
    const description = req.body.description;
    const rate = req.body.rate;
	const user_id = req.body.user_id;
	const delay = req.body.delay;
    

    LoanController.add(amount, description, rate,user_id,delay)
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
