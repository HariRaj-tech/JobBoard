module.exports = (sequelize, DataTypes) => {
    const Job = sequelize.define(
        'jobs',
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

    Job.associate = (models) => {
        // Job.hasOne(models.companies);
        // Job.hasMany(models.users);
    };

    return Job;
};
