﻿const register = require('./register');
const login = require('./login');
const logout = require('./logout');
const update = require('./update');
const forgetPassword = require('./forgetPassword');
const resetPassword = require('./resetPassword');
const user = require('./user');
const deleteUser = require('./deleteUser');

module.exports = {
    register,
    login,
    logout,
    update,
    forgetPassword,
    resetPassword,
    user,
    deleteUser
}
