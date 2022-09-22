"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "sales",
      [
        {
          id: 1,
          user_id: 3,
          total_price: 1000000.5,
          seller_id: 2,
          delivery_address: "rua comandande nélio",
          delivery_number: "AP 100",
          sale_date: "2022-01-17 04:33:12",
          status: "finalizado",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("sales", null, {});
  },
};

