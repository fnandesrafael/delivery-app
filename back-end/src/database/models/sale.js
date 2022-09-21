import User from "./user";
("use strict");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define(
    "sales",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "user_id",
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: { model: "users", key: "id" },
      },
      totalPrice: {
        type: DataTypes.DECIMAL(9, 2),
        allowNull: false,
        field: "total_price",
      },
      sellerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "seller_id",
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: { model: "users", key: "id" },
      },
      deliveryAdress: {
        allowNull: false,
        type: DataTypes.STRING,
        field: "delivery_address",
      },
      deliveryAdress: {
        allowNull: false,
        type: DataTypes.STRING,
        field: "delivery_number",
      },
      saleDate: {
        allowNull: false,
        type: DataTypes.DATE,
        field: "sale_date",
      },
      status: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    { tableName: "sales", timestamps: false }
  );
  User.hasMany(Sale, {
    foreignKey: "userId",
    as: "user_id",
  });
  User.hasMany(Sale, {
    foreignKey: "sellerId",
    as: "seller_id",
  });

  Sale.belongsTo(User);
  return Sale;
};
