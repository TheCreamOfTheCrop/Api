const Negociate = require('../../models/mysql/negociate');

module.exports = function(id_user,id_loan,amount,rate,delay){

    if (!id_user) {
        return Promise.reject(new Error('user id is required'));
    }
    if (!id_loan) {
        return Promise.reject(new Error('loan id is required'));
    }
    if (!amount) {
        return Promise.reject(new Error('amount is required'));
    }
    if (!rate) {
        return Promise.reject(new Error('rate is required'));
    }
    if (!delay) {
      return Promise.reject(new Error('delay is required'));
    }


    var newNego = {
      id_loan: id_loan,
      id_user_negociate: id_user,
      amount: amount,
      rate: rate,
	    delay: delay
  };

  return Negociate.create(newNego)
    .then(handleNegociateResponse);

    function handleNegociateResponse(nego) {
        if(!nego) {
            return Promise.reject(new Error("Couldn't create negociation"));
        } else {
            return nego;
        }

    }
}
