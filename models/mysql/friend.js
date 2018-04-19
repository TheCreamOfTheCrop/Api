const sequelize	= require('./_sequelize').sequelize;

const Friend = (_sequelize, DataTypes) => {
  return sequelize.define('friend', {
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
    status: {
        type: DataTypes.ENUM('request', 'accepted', 'rejected'),
        allowNull: false,
    },
    user_id: {
        type: DataTypes.BIGINT,
        references: {
            model: 'user',
            key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    },
    friend_id: {
        type: DataTypes.BIGINT,
        references: {
            model: 'user',
            key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }
  }, {
    paranoid: true,
    timestamps: true,
    underscored: true,
    freezeTableName: true,
  });
};

module.exports = sequelize.import('friend', Friend);
