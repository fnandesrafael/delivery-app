'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('products',{
    saleId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      field: 'sale_id',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',  
      references: { model: 'sales', key: 'id' }
    },
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      field: 'product_id',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',  
      references: { model: 'products', key: 'id' }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,      
    },
  },{ tableName: 'products', timestamps: false })

  return Product;
};