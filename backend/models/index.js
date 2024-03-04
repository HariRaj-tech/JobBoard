'use strict';

require('dotenv').config();
const logger = require('services/logger');
const { Sequelize, DataTypes, Model } = require('sequelize');
const CompanyModel = require('./company');
const UserModel = require('./user');
const JobModel = require('./job');
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

const dbUrl = `postgres://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbDatabase}`;

logger.info(`connecting to the database at '${dbUrl}'...`);
const sequelize = new Sequelize(dbUrl, {
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

const companies = CompanyModel(sequelize, DataTypes);
const users = UserModel(sequelize, DataTypes);
const jobs = JobModel(sequelize, DataTypes);

companies.associate(sequelize.models);
users.associate(sequelize.models);
jobs.associate(sequelize.models);

logger.info(`updating database schema...`);
sequelize.sync({ alter: true });

module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;
module.exports.companies = companies;
module.exports.users = users;
module.exports.jobs = jobs;
