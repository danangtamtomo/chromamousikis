'use strict';
module.exports = function(sequelize, DataTypes) {
  var TagMusic = sequelize.define('TagMusic', {
    music_id: DataTypes.INTEGER,
    tag_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return TagMusic;
};