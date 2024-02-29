module.exports = (sequelize, DataTypes) => {
    const Company = sequelize.define(
        'companies',
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
            modelName: 'company',
            tableName: 'companies',
            underscored: true,
        },
    );

    Company.associate = (models) => {
        Company.hasMany(models.jobs);
    };

    return Company;
};
