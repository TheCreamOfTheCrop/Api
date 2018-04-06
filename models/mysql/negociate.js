const sequelize = require('./_sequelize').sequelize;

const Negociate = (_sequelize, DataTypes) => {
    return sequelize.define('negociate', {
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
        id_loan: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        id_user_negociate: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        amount: {
            type: DataTypes.FLOAT,
            unique: true,
            allowNull: false,
        },
        rate: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        delay: {
            type: DataTypes.BIGINT,
            allowNull: false,
        }

    }, {
            paranoid: true,
            timestamps: true,
            underscored: true,
            freezeTableName: true,
        });
};

module.exports = sequelize.import('negociate', Negociate);
