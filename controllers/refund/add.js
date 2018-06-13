const Refund = require('../../models/mysql/refund');

module.exports = function (amount, loan_id) {
    if (!amount) {
        return Promise.reject(new Error('amount is required'));
    }
    if (!loan_id) {
        return Promise.reject(new Error('id_loan is required'));
    }

    var newRefund = {
        amount: amount,
        loan_id: loan_id,
    };

    return Refund.create(newRefund)
        .then(handleLoanResponse);

    function handleLoanResponse(refund) {
        if (!refund) {
            return Promise.reject(new Error("Couldn't create refund"));
        } else {
            return refund;
        }

    }
}
