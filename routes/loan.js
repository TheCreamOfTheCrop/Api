const loanAction = require('../actions/loan');

module.exports = function (router) {
    router.post('/loan/add', loanAction.add);
}
