const Loan = require('../../models/mysql/loan');

module.exports = function(id_loan, loanUpdate){
    if (!id_loan) {
        return Promise.reject(new Error('loan id is require'));
    }
    return Loan.update(
        loanUpdate,
        {
            where: {
                id: id_loan, 
            }
        }
    )
    .then(handleUpdateLoanResponse);

    function handleUpdateLoanResponse(result) {
        if (result[0] == 0) {
            return Promise.reject(new Error("Can't update loan"));
        } else {
            return result;
        }
    }
}
