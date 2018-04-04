const Loan = require('../../models/mysql/loan');

module.exports = function(amount,description,rate,id,delay){
    if (!amount) {
        return Promise.reject(new Error('amount is required'));
    }
    if (!description) {
        return Promise.reject(new Error('description is required'));
    }
    if (!rate) {
        return Promise.reject(new Error('rate is required'));
    }
    if (!id) {
        return Promise.reject(new Error('user id is required'));
    }
	
	if (!delay) {
        return Promise.reject(new Error('delay is required'));
    }



    var newLoan = {
      amount: amount,
      description: description,
      rate: rate,
      loan_type: 'public',
	  state_id: 'en attente',
      user_requester_id: id,
	  delay: delay
  };

  return Loan.create(newLoan)
    .then(handleLoanResponse);
  
    function handleLoanResponse(loan) {
        if(!loan) {
            return Promise.reject(new Error("Couldn't create loan"));
        } else {
            return loan;
        }
        
    }
}
