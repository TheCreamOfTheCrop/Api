const config = require('../config');
const user = require('./user');
const loan = require('./loan');
const negociate = require('./negociate');
const friend = require('./friend');

const checkSession = require('../controllers/user/checkSession');
module.exports = function (router){

    router.get('/', [checkSession], function (req, res) {

        res.status(config.constants.OK)
        res.json({
            message:"Welcome to BmyBank API",
        });
    });

    user(router, checkSession);
	loan(router, checkSession);
    negociate(router, checkSession);
	friend(router, checkSession);

};
