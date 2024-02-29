module.exports = (sequelize, DataTypes) => {
    const Job = sequelize.define(
        'Job',
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
            modelName: 'job',
            tableName: 'jobs',
            underscored: true,
        },
    );

    Job.associate = (models) => {};

    return Job;
};
