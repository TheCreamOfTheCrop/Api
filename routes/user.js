const userAction = require('../actions/user');

module.exports = function (router) {
    router.post('/user/register', userAction.register);
    router.post('/user/login', userAction.login);
    router.post('/user/logout', userAction.logout);
    router.post('/user/update', userAction.update);
    router.post('/user/resetPassword', userAction.resetPassword);
    router.post('/user/forgetPassword', userAction.forgetPassword);
    router.post('/user', userAction.user);
}
