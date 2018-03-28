﻿const sequelize = require('./_sequelize').sequelize;
const startConnection = require('./_sequelize').start;

const User = require('./user');


const initDatabase = process.argv.includes('initDatabase') || process.env.INIT_DB;
const resetDatabase = process.argv.includes('resetDatabase') || process.env.RESET_DB;


if (process.env.NODE_ENV === 'production') {
<<<<<<< HEAD
    console.log(process.env.NODE_ENV);
    startConnection()
=======
  startConnection()
>>>>>>> 202e491a80d9efb43c3a41d45f64cf1aa976a023
    .then(createDatabaseProd)
    .catch((err) => {
      return Promise.reject(new Error("couldn't create db prod : " + err));
    });
} else {
  startConnection()
    .then(createDatabase)
    .catch((err) => {
<<<<<<< HEAD
      return Promise.reject(new Error("couldn't create db local : " + err));
=======
      return Promise.reject(new Error("couldn't create db local: " + err));
>>>>>>> 202e491a80d9efb43c3a41d45f64cf1aa976a023
    });
}

function createDatabaseProd() {
  if (!initDatabase) {
      return Promise.reject(false);
  }
    return sequelize
        .sync({
            force: resetDatabase,
        });
}


function createDatabase() {
    if (!initDatabase) {
        return Promise.reject(false);
    }
    return sequelize
        .sync({
            force: resetDatabase,
        });
}
