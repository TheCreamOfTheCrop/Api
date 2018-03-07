const config = require('../../config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(config.env.database.database,
                                config.env.database.user,
                                config.env.database.password,
                                config.env.database.options);


function start() {
  return sequelize
  .validate()
  .then(connectionLogs)
  .catch(handleErrors);

function connectionLogs() {
  return console.log(
  `Mysql DB ${config.env.database.database} connected on port ${config.env.database.port}.`
  );
}

function handleErrors(error) {
    console.log(`Mysql DB connection error: ${error}.`);
    return promise.reject(error);
}
}

module.exports = {
  sequelize,
  start,
};
