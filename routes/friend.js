const friendAction = require('../actions/friend');

module.exports = function (router, checkSession) {
    //router.post('/friend/', [checkSession], friendAction.friend);
    //router.post('/friend/search', [checkSession], friendAction.search);
    router.post('/friend/add', [checkSession], friendAction.add);
    //router.post('/friend/remove', [checkSession], friendAction.remove);
    //router.post('/friend/request', [checkSession], friendAction.request);
    router.post('/friend/request/accept', [checkSession], friendAction.accept);
    router.post('/friend/request/reject', [checkSession], friendAction.reject);
}
