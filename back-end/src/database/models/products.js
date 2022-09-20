'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const salesProduct = sequelize.define('sales_products',{
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement:true,
    },   
    price: {
      type: DataTypes.DECIMAL(4,2),
      allowNull:false,      
    },
    urlImage: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      field: 'url_image',
    },
  },{ tableName: 'sales_products', timestamps: false })

  return salesProduct;
};