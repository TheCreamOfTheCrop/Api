const noteController = require('../../controllers/note');
const config = require('../../config');

module.exports = function(req, res) {

    if (!req.body.loan_id) {
        return res
        .status(config.constants.BAD_REQUEST)
        .json({
            message: "loan id is required",
            success: false
        })
    }

    const loan_id = req.body.loan_id;

    noteController.findLoanNote(loan_id)
    .then((note) => {
        res
        .status(config.constants.OK)
        .json({
            note: note,
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
