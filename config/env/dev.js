module.exports = {
    path: {
        host: "localhost",
        port: "4100"
    },
    database: {
        database: 'bmybankdb',
        user: 'root',
        password: 'bmybank',
        port: 3306,
        option: {

        },
    },
    token: {
        secret: 'bmybank',
        expires: 30 * 60 * 1000 // 5 minutes
    },
    cookie: {
        expires: 24 * 60 * 60 * 1000 //  1 day
    }
};
