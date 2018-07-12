const noteAction = require('../actions/note');

module.exports = function (router, checkSession) {
    router.post('/note/add', [checkSession], noteAction.add);
	router.post('/note/listNote', [checkSession], noteAction.listNote);
	router.post('/note/findLoanNote', [checkSession], noteAction.findLoanNote);
	router.post('/note/listNoteMadeByUser', [checkSession], noteAction.listNoteMadeByUser);
}
