const config = require('../../config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(config.env.database.database,
    config.env.database.user,
    config.env.database.password,
    config.env.database.options);


function start() {

    return new Promise(function (resolve, reject) {

        sequelize
            .validate()
            .then(connectionLogs)
            .then(resolve)
            .catch(handleErrors);
    });

    function connectionLogs() {
        return console.log(
            `Mysql DB ${config.env.database.database} connected on port ${config.env.database.port}.`
        );
    }

    function handleErrors(error) {
        console.log(`Mysql DB connection error: ${error}.`);
    }
}

module.exports = {
    sequelize,
    start,
};
