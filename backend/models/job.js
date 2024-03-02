module.exports = (sequelize, DataTypes) => {
    const Job = sequelize.define(
        'jobs',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            companyName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            location: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            jobTitle: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            description: {
                type: DataTypes.STRING,
            },
            salary: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            experience: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            jobSkills: {
                type: DataTypes.ARRAY(DataTypes.STRING),
            },
            logoUrl: {
                type: DataTypes.STRING,
                defaultValue: 'https://jobbox-nextjs-v3.vercel.app/assets/imgs/brands/brand-1.png',
            },
            jobType: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            industry: {
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
