const loanAction = require('../actions/loan');

module.exports = function (router, checkSession) {
    router.post('/loan/add', [checkSession], loanAction.add);
}
