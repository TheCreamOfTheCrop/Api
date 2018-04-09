const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

module.exports = function (app) {
    // Support json encoded bodies
    app.use(bodyParser.json({
        limit: '50mb',
    }));

    // Support encoded bodies
    app.use(bodyParser.urlencoded({
        limit: '50mb',
        extended: true,
    }));

    app.use(cookieParser());

    app.use(function(req, res, next) {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
      next();
});
    // Use morgan to log incomming requests
    app.use(morgan('dev'));
    return app;
};
