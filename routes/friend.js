const friendAction = require('../actions/friend');

module.exports = function (router, checkSession) {
    router.get('/friend/', [checkSession], friendAction.friend);
    router.post('/friend/add', [checkSession], friendAction.add);
    router.post('/friend/remove', [checkSession], friendAction.remove);
    router.get('/friend/request', [checkSession], friendAction.request);
    router.post('/friend/request/accept', [checkSession], friendAction.accept);
    router.post('/friend/request/reject', [checkSession], friendAction.reject);
}
