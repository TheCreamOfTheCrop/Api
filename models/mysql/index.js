﻿const sequelize = require('./_sequelize').sequelize;
const startConnection = require('./_sequelize').start;

const User = require('./user');
const Loan = require('./loan');
const Negociate = require('./negociate');
const Friend = require('./friend');
const Refund = require('./refund');
const Note = require('./note');

const initDatabase = process.argv.includes('initDatabase') || process.env.INIT_DB;
const resetDatabase = process.argv.includes('resetDatabase') || process.env.RESET_DB;


if (process.env.NODE_ENV === 'production') {
    console.log(process.env.NODE_ENV);
    startConnection()
    .then(createDatabaseProd)
    .catch((err) => {
      return Promise.reject(new Error("couldn't create db prod : " + err));
    });
} else {
  startConnection()
    .then(createDatabase)
    .catch((err) => {
      return Promise.reject(new Error("couldn't create db local : " + err));
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
