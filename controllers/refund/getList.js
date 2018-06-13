const Refund = require('../../models/mysql/refund');

module.exports = function (loan_id) {

    if (!loan_id) {
        return Promise.reject(new Error('loan_id id is required'));
    }


    return Refund.findAll({
        where: {
            loan_id: loan_id
        }
    }).then(handleAcceptResponse)

    function handleAcceptResponse(result) {
        if (result[0] == 0) {
            return Promise.reject(new Error("Can't find refunds"));
        } else {
            return result;
        }
    }
}
