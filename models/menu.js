'use strict';
module.exports = (sequelize, DataTypes) => {
  const menu = sequelize.define('menu', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  menu.associate = function(models) {
    // associations can be defined here
    models.menu.belongsTo(models.user)
  };
  return menu;
};