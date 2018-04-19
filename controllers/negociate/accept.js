const Loan = require('../../models/mysql/loan');
const Negociation = require('../../models/mysql/negociate');

module.exports = function(id){
    let loan;
    var loanUpdate = {};
    if (!id) {
        return Promise.reject(new Error('user id is require'));
    }
    return Negociation.find({
          where: {
              id: id
          },
    })
    .then(l => loan = l)
    .then(handleAcceptResponse)
    .then(updateLoan)
    .then(destroyNegociation)


    function handleAcceptResponse(result) {
        if (result[0] === 0) {
            return Promise.reject(new Error("Can't accept that negociation"));
        }
        return result;
    }

    function updateLoan() {
      var id_loan = loan.id_loan;
      loanUpdate.amount = loan.amount;
      loanUpdate.rate = loan.rate;
      loanUpdate.delay = loan.delay;
      loanUpdate.user_provider_id = loan.id_user_negociate;
      loanUpdate.state_id = "en cours";

      return Loan.update(
            loanUpdate,
            {
                where: {
                    id: id_loan,
                }
            })
    }

    function destroyNegociation() {
      var id_loan = loan.id_loan;
        return Negociation.destroy({

            where: {
              id_loan: id_loan,
            }
        })
    }
}
