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
	
	if (!req.body.state_id) {
		const state_id = "";
	}
	
    const user_id = req.user.id;
	const state_id = req.body.state_id;
    
    loanController.findLoan(user_id,state_id)
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
