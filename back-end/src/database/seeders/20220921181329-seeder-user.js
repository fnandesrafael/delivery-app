"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          id: 1,
          name: "Delivery App Admin",
          email_un: "adm@deliveryapp.com",
          password: "a4c86edecc5aee06eff8fdeda69e0d04",
          role: "administrator",
        },
        {
          id: 2,
          name: "Fulana Pereira",
          email_un: "fulana@deliveryapp.com",
          password: "3c28d2b0881bf46457a853e0b07531c6",
          role: "seller",
        },
        {
          id: 3,
          name: "Cliente Zé Birita",
          email_un: "zebirita@email.com",
          password: "1c37466c159755ce1fa181bd247cb925",
          role: "customer",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
