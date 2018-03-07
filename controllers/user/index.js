const register = require('./register');
const logout = require('./logout');
const login = require('./login');
const update = require('./update');
const findUsers = require('./findUsers');
const findUser = require('./findUser');
const forgetPassword = require('./forgetPassword');
const resetPassword = require('./resetPassword');
const user = require('./user');

module.exports = {
    register,
    login,
    logout,
    update,
    findUser,
    findUsers,
    forgetPassword,
    resetPassword,
    user,
}
