const sequelize = require('./_sequelize').sequelize;

const User = (_sequelize, DataTypes) => {
    return sequelize.define('user', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        uid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            unique: true,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastname: {
            type: DataTypes.STRING,
        },
        firstname: {
            type: DataTypes.STRING,
        },
        avatar: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        },
        isAccountValidate: {
            type: DataTypes.BOOLEAN,
        },
		note: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
		
    }, {
            paranoid: true,
            timestamps: true,
            underscored: true,
            freezeTableName: true,
        });
};

module.exports = sequelize.import('user', User);
