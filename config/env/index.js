const dev = require('./dev');
﻿const prod = require('./prod');

//Pour bien proteger
const config = (function () {
  let config;
  switch (process.env.NODE_ENV) {
    case 'production':
      config = prod;
      break;
    case 'dev':
      config = dev;
      break;
    default:
      config = dev;
    }

    //if (!process.env.SENDGRID_PRIVATE_KEY)
      //throw 'Sois pas con, rajoute ta variable d\'env';

    //config.sendgrid = {
      //private_key : process.env.SENDGRID_PRIVATE_KEY,
    //}

    return config;
}());

module.exports = config;
