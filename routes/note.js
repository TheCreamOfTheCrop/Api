const noteAction = require('../actions/note');

module.exports = function (router, checkSession) {
    router.get('/note/add', [checkSession], noteAction.add);
}
