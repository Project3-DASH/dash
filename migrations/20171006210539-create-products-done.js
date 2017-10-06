'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('products_dones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      company_name: {
        type: Sequelize.STRING
      },
      product_name: {
        type: Sequelize.STRING
      },
      category_product: {
        type: Sequelize.STRING
      },
      image_product: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE
      },
      createdAt: {
        // allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        // allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('products_dones');
  }
};