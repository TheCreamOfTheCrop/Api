const Negociate = require('../../models/mysql/negociate');

module.exports = function(id_user,id_loan,amount,rate,delay){
	
	let nego;
	var newNego = {};

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


    newNego = {
      id_loan: id_loan,
      id_user_negociate: id_user,
      amount: amount,
      rate: rate,
	  delay: delay
	};
  
	return Negociate.find({
			where: {
			  id_loan: id_loan,
			  id_user_negociate: id_user
		  },
	})
	.then(n => nego = n)
	.then(handleNegociateResponse)

    function handleNegociateResponse(nego) {

        if(!nego) {
            return Negociate.create(newNego)
        } else {
			
			var id_nego = nego.id;
			
			
            return Negociate.update(
					newNego,
					{
						where : {
							id: id_nego,
							id_loan: id_loan
							
						},
					}
				)
		  }	
        }

    
}
