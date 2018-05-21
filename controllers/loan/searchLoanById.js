const Loan = require('../../models/mysql/loan');

module.exports = function(id_loan) {
    if (!id_loan) {
        Promise.reject(new Error('user id and friend id are required'));
    } else {
        return Loan.findOne( {
            where: {
                id: id_loan
            }
        });
    };
};
