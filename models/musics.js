'use strict';
module.exports = function(sequelize, DataTypes) {
  var Musics = sequelize.define('Musics', {
    title: DataTypes.STRING,
    duration: DataTypes.STRING,
    url: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Musics;
};