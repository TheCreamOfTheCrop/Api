const dev = require('./dev');

//Pour bien proteger
const config = (function () {
    return dev;
}());

module.exports = config;
