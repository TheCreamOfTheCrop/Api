const Loan = require('../../models/mysql/loan');

module.exports = function(id){
    let loan;
    if (!id) {
        return Promise.reject(new Error('user id is require'));
    }
    return Loan.findAll({
        where: {
            user_requester_id: id 
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
