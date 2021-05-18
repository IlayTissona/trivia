require("dotenv").config();

const { DB_USERNAME, PASS, DB_DEV, DB_PROD, HOST, DB_TEST } = process.env;

module.exports = {
  development: {
    username: DB_USERNAME || 'root',
    password: PASS,
    database: DB_DEV,
    host: HOST || 'localhost',
    dialect: "mysql",
    seederStorage: "sequelize",
    seederStoragePath: "sequelizeData",
    logging: true,
  },
  test: {
    username: DB_USERNAME || 'root',
    password: PASS,
    database: DB_TEST || '',
    host: HOST || 'localhost',
    dialect: "mysql",
  },
  production: {
    username: DB_USERNAME,
    password: PASS,
    database: DB_PROD,
    dialect: "mysql",
    dialectOptions: {
      socketPath: `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`,
    },
    seederStorage: "sequelize",
    seederStoragePath: "sequelizeData",
    logging: false,
  },
};
