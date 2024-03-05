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
            contact_number: {
                type: DataTypes.INTEGER,
            },
            contact_email: {
                type: DataTypes.STRING,
            },
        },
        {
            modelName: 'company',
            tableName: 'companies',
            underscored: true,
        },
    );

    Company.associate = (models) => {};

    return Company;
};
