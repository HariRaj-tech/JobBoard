module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        'users',
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
            contact_no: {
                type: DataTypes.STRING,
            },
            location: {
                type: DataTypes.STRING,
            },
            languages: {
                type: DataTypes.ARRAY(DataTypes.STRING),
            },
            skills: {
                type: DataTypes.ARRAY(DataTypes.STRING),
            },
            about: {
                type: DataTypes.STRING(2000),
            },
            image: {
                type: DataTypes.BLOB,
            },
            resume: {
                type: DataTypes.BLOB,
            },
        },
        {
            modelName: 'user',
            tableName: 'users',
            underscored: true,
        },
    );

    User.associate = (models) => {
        User.belongsToMany(models.jobs, { through: 'users_and_jobs' });
    };

    return User;
};
