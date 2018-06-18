const Refund = require('../../models/mysql/refund');
const Loan = require('../../models/mysql/loan');

module.exports = function (amount, loan_id) {
    if (!amount) {
        return Promise.reject(new Error('amount is required'));
    }
    if (!loan_id) {
        return Promise.reject(new Error('id_loan is required'));
    }


    return Loan.findOne({
        where: {
            id: loan_id
        }
    }).then((loan) => {

        if (loan.state_id !== "en cours") {
            return Promise.reject(new Error("Loan's state cannot handle refund"))
        }

        const totalNeeded = parseFloat(parseFloat(loan.amount) + parseFloat(parseFloat(loan.amount) * (parseFloat(loan.rate) / 100)));

        console.log("amount ! " + parseFloat(loan.amount));
        console.log("rate ! " + parseFloat(loan.rate));
        console.log("amount * rate ! " + parseFloat(loan.amount) * parseFloat(loan.rate));
        console.log("totalNeeded ! " + parseFloat(totalNeeded));
        console.log("totalrefunded ! " + parseFloat(loan.totalRefunded));

        if (parseFloat(loan.totalRefunded) >= totalNeeded) {
            return Promise.reject(new Error("Loan already completely refunded"))
        }

        const isLastRefund = totalNeeded <= (parseFloat(loan.totalRefunded) + parseFloat(amount));

        return Loan.update(
            {
                totalRefunded: parseFloat(loan.totalRefunded) + parseFloat(amount),
                state_id: isLastRefund ? "finis" : "en cours"
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
        console.log("error retriving loan by id " + err)
    })


    function handleLoanResponse(refund) {
        if (!refund) {
            return Promise.reject(new Error("Couldn't create refund"));
        } else {
            return refund;
        }

    }
}
