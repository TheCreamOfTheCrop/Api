const loanController = require('../../controllers/loan');
const config = require('../../config');

module.exports = function(req, res) {
    
    if (!req.user.id) {
        return res
        .status(config.constants.BAD_REQUEST)
        .json({
            message: "user id is required",
            success: false
        })
    }
	
	if (!req.body.loan_id) {
		return res
        .status(config.constants.BAD_REQUEST)
        .json({
            message: "loan id is required",
            success: false
        })
	}
	
    const user_id = req.user.id;
	const loan_id = req.body.loan_id;
    
    loanController.negociate(user_id,loan_id)
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
