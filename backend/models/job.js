const { Model, DataTypes } = require('sequelize');
const sequelize = require('./index');
const logger = require('services/logger');

class Job extends Model {}

Job.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'job',
        tableName: 'jobs',
        underscored: true,
    },
);

Job.sync({ alter: true });
logger.info(`table 'jobs' is updated to match the model.`);

module.exports = Job;
