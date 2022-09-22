'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('SalesProducts',{
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
  },{ tableName: 'sales_products', timestamps: false })

  return SalesProducts;
};