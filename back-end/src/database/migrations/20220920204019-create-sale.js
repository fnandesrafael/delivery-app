'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },  userId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        field: 'user_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',  
        references: { model: 'users' , key: 'id' }
      },
      totalPrice: {
        type: Sequelize.DECIMAL(9,2),
        allowNull:false,
        field: 'total_price'
  
      },
      sellerId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        field: 'seller_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',  
        references: { model: 'users' , key: 'id' }
      },
      deliveryAdress: {
        allowNull:false,
        type:Sequelize.STRING,
        field:'delivery_address',
      },
      deliveryAdress: {
        allowNull:false,
        type:Sequelize.STRING,
        field:'delivery_number',
      },
      saleDate: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      name: {
        allowNull:false,
        type:Sequelize.STRING,
      },
      status: {
        allowNull:false,
        type:Sequelize.STRING,
      },    
      email: {
        allowNull:false,
        type:Sequelize.STRING,
        field: 'email_un',
        unique: true,       
      },
      password: {
        allowNull:false,
        type:Sequelize.STRING,
      },
      role: {
        allowNull:false,
        type:Sequelize.STRING,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('sales');
  }
};