const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
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
            modelName: 'Company',
            tableName: 'Companys',
            underscored: true,
        },
    );

    return Company;
};
