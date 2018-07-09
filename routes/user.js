const userAction = require('../actions/user');

module.exports = function (router, checkSession) {
    router.post('/user/register', userAction.register);
    router.post('/user/login', userAction.login);
    router.post('/user/logout', [checkSession], userAction.logout);
    router.put('/user', [checkSession], userAction.update);
    router.post('/user/resetPassword', userAction.resetPassword);
    router.post('/user/forgetPassword', userAction.forgetPassword);
    router.post('/user', [checkSession], userAction.user);
    router.post('/user/delete', [checkSession], userAction.deleteUser);
}
