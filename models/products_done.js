'use strict';
module.exports = (sequelize, DataTypes) => {
  var products_done = sequelize.define('products_done', {
    company_name: DataTypes.STRING,
    product_name: DataTypes.STRING,
    category_product: DataTypes.STRING,
    image_product: DataTypes.STRING,
    date: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return products_done;
};