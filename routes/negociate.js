const negociationAction = require('../actions/negociate');

module.exports = function (router, checkSession) {
    router.post('/negociate/add', [checkSession], negociationAction.add);
    router.post('/negociate/accept', [checkSession], negociationAction.accept);
}
