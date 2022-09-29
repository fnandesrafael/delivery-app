("use strict");
module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define(
    "Sale",
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
      deliveryAddress: {
        allowNull: false,
        type: DataTypes.STRING,
        field: "delivery_address",
      },
      deliveryNumber: {
        allowNull: false,
        type: DataTypes.STRING,
        field: "delivery_number",
      },
      saleDate: {
        allowNull: false,
        type: DataTypes.DATE,
        field: "sale_date",
        defaultValue: DataTypes.NOW,
      },
      status: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: "Pendente"
      },
    },
    { tableName: "sales", timestamps: false }
  );
  return Sale;
};
