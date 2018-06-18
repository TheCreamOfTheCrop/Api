const Refund = require('../../models/mysql/refund');
const Loan = require('../../models/mysql/loan');

module.exports = function (amount, loan_id) {
    if (!amount) {
        return Promise.reject(new Error('amount is required'));
    }
    if (!loan_id) {
        return Promise.reject(new Error('id_loan is required'));
    }


    Loan.findOne({
        where: {
            id: loan_id
        }
    }).then((loan) => {

        const totalNeeded = loan.amount + (loan.amount * loan.rate);

        if (loan.totalRefunded >= totalNeeded) {
            return Promise.reject(new Error("Loan already completely refunded"))
        }

        Loan.update(
            {
                totalRefunded: loan.totalRefunded + amount
            },
            {
                where: {
                    id: loan_id,
                }
            }
        ).then((loan) => {

            const newRefund = {
                amount: amount,
                loan_id: loan_id,
            };

            return Refund.create(newRefund)
                .then(handleLoanResponse);

        }).catch((err) => {
            console.log("error updating loan")
        })


    }).catch((err) => {
        console.log("error retriving loan by id")
    })


    function handleLoanResponse(refund) {
        if (!refund) {
            return Promise.reject(new Error("Couldn't create refund"));
        } else {
            return refund;
        }

    }
}
