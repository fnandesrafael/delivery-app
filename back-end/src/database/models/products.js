"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
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
      price: {
        type: DataTypes.DECIMAL(4, 2),
        allowNull: false,
      },
      urlImage: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "",
        field: "url_image",
      },
    },
    { tableName: "products", timestamps: false }
  );


  return Product;
};
