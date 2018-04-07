const config = require('../../config');
const NegociateController = require('../../controllers/negociate');

module.exports = function(req, res) {
	const id = req.user.id;
    if (!req.body.id_loan || !req.body.amount || !req.body.rate || !req.body.delay) {
        res
        .status(config.constants.BAD_REQUEST)
        .json({
            message: "missing informations to create the Negociate",
            success: false
        })
    }

    const user_id = id;
    const id_loan = req.body.id_loan;
    const amount = req.body.amount;
    const rate = req.body.rate;
  	const delay = req.body.delay;


    NegociateController.add(user_id, id_loan, amount, rate, delay)
    .then((nego) => {
        res
        .status(config.constants.OK)
        .json({
            nego,
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
