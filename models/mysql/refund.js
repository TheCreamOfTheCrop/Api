const sequelize = require('./_sequelize').sequelize;
const Sequelize = require('sequelize');

const Refund = (_sequelize, DataTypes) =>
{
    return sequelize.define('refund', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        amount: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        loan_id: {
            type: DataTypes.BIGINT,
            references: {
                model: 'loan',
                key: 'id',
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        },
        creationdate: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
        }
    }, {
        paranoid: true,
        timestamps: true,
        underscored: true,
        freezeTableName: true
    });
}

module.exports = sequelize.import('refund', Refund);
