const dev = require('./dev');
﻿const prod = require('./prod');

//Pour bien proteger
const config = (function () {
  switch (process.env.NODE_ENV) {
<<<<<<< HEAD
    case 'prod':
=======
    case 'production':
>>>>>>> 202e491a80d9efb43c3a41d45f64cf1aa976a023
      return prod;
    case 'dev':
      return dev;
    default:
      return dev;
    }
}());

module.exports = config;
