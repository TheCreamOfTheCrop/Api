const Loan = require('../../models/mysql/loan');

module.exports = function(user_id,state_id){
	
    let loan;
    if (!user_id) {
        return Promise.reject(new Error('user id is required'));
    }
	
	if (!state_id) {
		
		return Loan.findAll({
        where: {
			$or: [
           { user_requester_id: user_id },
		   { user_provider_id: user_id}
			]
        },
    })
	.then(l => loan = l)
    .then(handleFindLoanResponse)
	.then(findLoanWithoutFilter)
    
		function handleFindLoanResponse(loan) {
			if (!loan) {
				return Promise.reject(new Error("Loans was not found"));
			} 			 
		}
		
		function findLoanWithoutFilter() {
	        return loan;
		}
	}
	
	else {
		
		return Loan.findAll({
        where: {
            user_requester_id: user_id,
            state_id: state_id
        },
    })
	.then(l => loan = l)
    .then(handleFindLoanResponse)
	.then(findLoanWithFilter)
    
		function handleFindLoanResponse(loan) {
			if (!loan) {
				return Promise.reject(new Error("Loans was not found"));
			}    
		}
		
		function findLoanWithFilter() {
			return loan;
		}
	
	}
    
    
}
