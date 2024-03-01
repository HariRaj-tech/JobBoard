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
        Job.belongsTo(models.companies, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });
    };

    return Job;
};
