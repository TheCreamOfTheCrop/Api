const Loan = require('../../models/mysql/loan');

module.exports = function(user_id, loan_id){
	
	let loan;
    if (!user_id) {
        return Promise.reject(new Error('user id is required'));
    }

    if (!loan_id) {
        return Promise.reject(new Error('Loan id is required'));
    }

    return Loan.update({
        state_id: 'en négociation',
		user_provider_id: user_id 
    },
    {
        where: {
			id: loan_id,
            state_id: 'en attente'
        },
    })
	.then(l => loan = l)
    .then(handleNegociateLoanResponse)
	.then(loanNegociate)

    function handleNegociateLoanResponse(loan) {
        if (loan[0] == 0) {
            return Promise.reject(new Error("Loan was not found or already on negociation"));
        }   
    }
	
	function loanNegociate() {
		return loan;
	}
	
}
