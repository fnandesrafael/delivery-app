'use strict';


const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('users',{
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement:true,
    },
    name: {
      allowNull:false,
      type:DataTypes.STRING,
    },
    email: {
      allowNull:false,
      type:DataTypes.STRING,
      field: 'email_un',
      unique: true,       
    },
    password: {
      allowNull:false,
      type:DataTypes.STRING,
    },
    role: {
      allowNull:false,
      type:DataTypes.STRING,
    },
  },{ tableName: 'users', timestamps: false })

  return User;
};