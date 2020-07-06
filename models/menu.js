'use strict';
module.exports = (sequelize, DataTypes) => {
  const menu = sequelize.define('menu', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    appetizer: DataTypes.TEXT,
    main: DataTypes.STRING,
    side: DataTypes.STRING,
    dessert: DataTypes.STRING
  }, {});
  menu.associate = function(models) {
    // associations can be defined here
    models.menu.belongsTo(models.user)

  };
  return menu;
};