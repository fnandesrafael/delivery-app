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
  }, { tableName: 'sales_products', timestamps: false })
  
  SalesProducts.associate = (models) => {
    models.Sale.belongsToMany(models.Product, {
      as:'products',
      through: SalesProducts,
      foreignKey: 'saleId',
      otherKey: 'productId',
    });
    models.Product.belongsToMany(models.Sale, {
      as:'sales',
      through: SalesProducts,
      foreignKey: 'productId',
      otherKey: 'saleId',
    });  
    }
  return SalesProducts;
};