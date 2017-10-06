'use strict';
module.exports = (sequelize, DataTypes) => {

    var products = sequelize.define('products', {

    company_name: DataTypes.STRING,

    product_name: DataTypes.STRING,

    category_product: DataTypes.STRING,

    image_product: DataTypes.STRING,

    date: DataTypes.DATE

    }, {
        tableName: "products",

    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return products;
};