const dev = require('./dev');
﻿const prod = require('./prod');

//Pour bien proteger
const config = (function () {
  switch (process.env.NODE_ENV) {
    case 'prod':
      return prod;
    case 'dev':
      return dev;
    default:
      return dev;
    }
}());

module.exports = config;
