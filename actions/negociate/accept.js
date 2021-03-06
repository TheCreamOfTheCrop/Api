const config = require('../../config');
const NegociateController = require('../../controllers/negociate');
const Loan = require('../../models/mysql/user');
const Negociate = require('../../models/mysql/negociate');



module.exports = function(req, res) {

    const id = req.user.id;
    const id_nego = req.body.id_nego;

    NegociateController.accept(id_nego)
    .then((nego) => {
        res
        .status(config.constants.OK)
        .json({
            message: "Loan has been fixed",
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
