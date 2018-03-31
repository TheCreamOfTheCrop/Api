module.exports = {
  path: {
    host: 'still-cove-11874.herokuapp.com',
    full_path: 'https://still-cove-11874.herokuapp.com/',
  },
  database: {
    database: 'i364rv2lyoorim82',
    user: 'z03wegq9fjagz2o7',
    password: 's57a5kpdkjc4r5lg',
    port: 3306,
    options: {
      host: 'l9dwvv6j64hlhpul.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
      dialect: 'mysql',
    },
  },
  token: {
      secret: 'bmybank',
      expires: 30 * 60 * 1000 * 1000000
  },
  cookie: {
      expires: 24 * 60 * 60 * 1000 //  1 day
  }
};
