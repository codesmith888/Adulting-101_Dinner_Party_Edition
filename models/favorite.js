'use strict';
module.exports = (sequelize, DataTypes) => {
  const favorite = sequelize.define('favorite', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    url: DataTypes.STRING,
    thumbnail: DataTypes.STRING
  }, {});
  favorite.associate = function(models) {
    // associations can be defined here
    models.favorite.belongsTo(models.user)
  };
  return favorite;
};