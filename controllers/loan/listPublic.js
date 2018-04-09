const Loan = require('../../models/mysql/loan');

module.exports = function(id, loanUpdate){
    let loan;
    if (!id) {
        return Promise.reject(new Error('user id is require'));
    }
    return Loan.findAll({
        where: {
          //$notLike: [{ user_requester_id: id }],
            state_id: 'en attente',
            loan_type: 'public'
        },
    })
    .then(l => loan = l)
    .then(handleAcceptResponse)

    function handleAcceptResponse(result) {
        if (result[0] == 0) {
            return Promise.reject(new Error("Can't find loans"));
        } else {
            return result;
        }
    }
}
