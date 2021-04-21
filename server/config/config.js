require('dotenv').config();

const { DB_USERNAME, PASS, DB_DEV, HOST, DB_TEST } = process.env;

module.exports = {
  "development": {
    "username": DB_USERNAME,
    "password": PASS,
    "database": DB_DEV,
    "host": HOST,
    "dialect": "mysql"
  },
  "test": {
    "username": DB_USERNAME,
    "password": PASS,
    "database": DB_TEST,
    "host": HOST,
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
