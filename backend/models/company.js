const { Model, DataTypes } = require('sequelize');
const sequelize = require('./index');
const logger = require('services/logger');

class Company extends Model {}

Company.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            unique: true,
        },
    },
    {
        sequelize,
        modelName: 'company',
        tableName: 'companies',
        underscored: true,
    },
);

Company.sync({ alter: true });
logger.info(`table 'companies' is updated to match the model.`);

module.exports = Company;
