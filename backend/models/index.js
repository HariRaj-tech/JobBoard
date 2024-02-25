require('dotenv').config();
const logger = require('services/logger');
const { Sequelize, DataTypes, Model } = require('sequelize');

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const dbDatabase = process.env.DB_DATABASE;

console.assert(dbUser);
console.assert(dbPassword);
console.assert(dbHost);
console.assert(dbPort);
console.assert(dbDatabase);

const connectionString = `postgres://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbDatabase}`;

logger.info(`connecting to the database at '${connectionString}'...`);
const sequelize = new Sequelize(connectionString, {
    logging: logger.debug.bind(logger),
});

async function check_connection() {
    try {
        await sequelize.authenticate();
        logger.info('connection to the database has been established successfully.');
    } catch (error) {
        logger.error('unable to connect to the database:', error);
        process.exit();
    }
}

check_connection();

module.exports = sequelize;
