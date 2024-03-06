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
            type: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            industry: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            location: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            experience: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            skills: {
                type: DataTypes.ARRAY(DataTypes.STRING),
            },
            salary: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            deadline: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            logo_url: {
                type: DataTypes.STRING,
                defaultValue: 'https://jobbox-nextjs-v3.vercel.app/assets/imgs/brands/brand-1.png',
            },
            description: {
                type: DataTypes.STRING(2000),
            },
        },
        {
            modelName: 'job',
            tableName: 'jobs',
            underscored: true,
        },
    );

    Job.associate = (models) => {
        Job.belongsTo(models.companies, {
            foreignKey: { name: 'company_id', allowNull: false },
            onDelete: 'CASCADE',
        });

        Job.belongsToMany(models.users, { through: 'users_and_jobs' });
    };

    return Job;
};
