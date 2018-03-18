const sequelize = require('./_sequelize').sequelize;
const startConnection = require('./_sequelize').start;

const User = require('./user');


const initDatabase = process.argv.includes('initDatabase') || process.env.INIT_DB;
const resetDatabase = process.argv.includes('resetDatabase') || process.env.RESET_DB;


if (process.env.NODE_ENV === 'prod') {
    startConnection()
        .then(createDatabaseProd)
        .catch((err) => {
        console.log("couldn't create db : " + err);
})
    ;
} else {
    startConnection()
        .then(createDatabase)
        .catch((err) => {
        console.log("couldn't create db : " + err);
})
    ;
}

function createDatabaseProd() {
    return sequelize
        .sync({
            force: true,
        });
}


function createDatabase() {
    if (!initDatabase) {
        return Promise.reject(false);
    }
    return sequelize
        .sync({
            force: true,
        });
}
