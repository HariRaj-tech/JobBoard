const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
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
            modelName: 'Job',
            tableName: 'Jobs',
            underscored: true,
        },
    );

    return Job;
};
