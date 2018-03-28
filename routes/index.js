const config = require('../config');
const user = require('./user');

module.exports = function (router){

    router.get('/', function (req, res) {

        res.status(config.constants.OK)
        res.json({
            message:"Welcome to BmyBank API",
        });
    });

    user(router);
};
