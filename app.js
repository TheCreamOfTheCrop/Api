const express = require('express');
const config = require('./config');
const routes = require('./routes');
const mysql = require('./models/mysql');

const app = express();
config.middlewares(app);
routes(app);


app.listen(config.env.path.port || process.env.PORT, function () {
    console.log(process.env.NODE_ENV);
    console.log(`listening on : ${config.env.path.host}:${config.env.path.port}`);
});
