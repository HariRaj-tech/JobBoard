const { Model, DataTypes } = require('sequelize');
const sequelize = require('./index');
const logger = require('services/logger');

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: true,
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
    },
    {
        sequelize,
        modelName: 'user',
        tableName: 'users',
        underscored: true,
    },
);

User.sync({ alter: true });
logger.info(`table 'users' is updated to match the model.`);

module.exports = User;
