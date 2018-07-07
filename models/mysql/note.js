const sequelize = require('./_sequelize').sequelize;
const Sequelize = require('sequelize');

const Note = (_sequelize, DataTypes) =>
{
    return sequelize.define('note', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        note: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        comments: {
            type: DataTypes.STRING,
        },
		user_requester_id: {
            type: DataTypes.BIGINT,
            references: {
                model: 'user',
                key: 'id',
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        },
        user_provider_id: {
            type: DataTypes.BIGINT,
            references: {
                model: 'user',
                key: 'id',
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        },
        loan_id: {
            type: DataTypes.BIGINT,
            references: {
                model: 'loan',
                key: 'id',
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        }
    }, {
        paranoid: true,
        timestamps: true,
        underscored: true,
        freezeTableName: true
    });
}

module.exports = sequelize.import('note', Note);