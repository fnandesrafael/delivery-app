'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      field: 'email_un',
      unique: true,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    role: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  }, { tableName: 'users', timestamps: false });

  
  User.associate = (models) => {
    User.hasMany(models.Sale, {
      foreignKey: "userId",
      as: "user_id",
    });
    User.hasMany(models.Sale, {
      foreignKey: "sellerId",
      as: "seller_id",
    })
  }

  return User;
};
