const Loan = require('../../models/mysql/loan');
const Negociation = require('../../models/mysql/negociate');

module.exports = function(id, loanUpdate){
    let loan;
    if (!id) {
        return Promise.reject(new Error('user id is require'));
    }
    return Loan.update(
        loanUpdate,
        {
            where: {
                id: id,
            }
        }
    )
    .then(l => loan = l)
    .then(handleAcceptResponse)
    .then(destroyNegociation)

    function handleAcceptResponse(result) {
        if (result[0] == 0) {
            return Promise.reject(new Error("Can't accept that negociation"));
        } else {
            return result;
        }
    }

    function destroyNegociation() {
      console.log("passe par destroy");
        return Negociation.destroy({

            where: {
              id_loan: id,
            }
        })
    }
}
