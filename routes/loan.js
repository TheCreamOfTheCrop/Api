const loanAction = require('../actions/loan');

module.exports = function (router, checkSession) {
  router.post('/loan/add', [checkSession], loanAction.add);
	router.post('/loan/findLoan', [checkSession], loanAction.findLoan);
	router.post('/loan/negociate', [checkSession], loanAction.negociate);
  router.post('/loan/listPublic', [checkSession], loanAction.listPublic);
  router.post('/loan/accept', [checkSession], loanAction.accept);
  router.post('/loan/list', [checkSession], loanAction.listLoans);
}
