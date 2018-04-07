const Loan = require('../../models/mysql/loan');

module.exports = function(id, loanUpdate){
    if (!id) {
        return Promise.reject(new Error('user id is require'));
    }
    return Loan.update(
        loanUpdate,
        {
            where: {
                id: id,
            }
        }
    )
    .then(handleAcceptResponse);

    function handleAcceptResponse(result) {
        if (result[0] == 0) {
            return Promise.reject(new Error("Can't accept that negociation"));
        } else {
            return result;
        }
    }
}
