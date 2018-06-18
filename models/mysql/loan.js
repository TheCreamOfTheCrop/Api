const sequelize = require('./_sequelize').sequelize;
const Sequelize = require('sequelize');

const Loan = (_sequelize, DataTypes) => {
    return sequelize.define('loan', {
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
        totalRefunded: {
            type: DataTypes.FLOAT,
        },
        amount: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        creationdate: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
        },
        description: {
            type: DataTypes.STRING,
        },
        rate: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        loan_type: {
            type: DataTypes.ENUM('prive', 'public'),
            allowNull: false,
        },
        state_id: {
            type: DataTypes.ENUM('en attente', 'en négociation', 'en cours', 'finis'),
            allowNull: false,
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

module.exports = sequelize.import('loan', Loan);
