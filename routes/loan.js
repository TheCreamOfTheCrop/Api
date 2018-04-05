const loanAction = require('../actions/loan');

module.exports = function (router, checkSession) {
    router.post('/loan/add', [checkSession], loanAction.add);
	router.post('/loan/findLoan', [checkSession], loanAction.findLoan);
	router.post('/loan/negociate', [checkSession], loanAction.negociate);
}
