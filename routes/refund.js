const refundAction = require('../actions/refund');

module.exports = function (router, checkSession) {
	router.post('/refund/add', [checkSession], refundAction.add);
	router.post('/refund/list', [checkSession], refundAction.list);
}
