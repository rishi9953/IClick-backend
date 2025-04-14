require('dotenv').config(); // Load environment variables

const environment = process.env.NODE_ENV || 'development';

const config = {
  development: {
    db: {
      host: process.env.DEV_DB_HOST,
      user: process.env.DEV_DB_USER,
      password: process.env.DEV_DB_PASSWORD,
      database: process.env.DEV_DB_NAME,
    },
  },
  production: {
    db: {
      host: process.env.PROD_DB_HOST,
      user: process.env.PROD_DB_USER,
      password: process.env.PROD_DB_PASSWORD,
      database: process.env.PROD_DB_NAME,
    },
  },
};

module.exports = config[environment];