'use strict';
module.exports = function(sequelize, DataTypes) {
  var Musics = sequelize.define('Musics', {
    title: DataTypes.STRING,
    duration: DataTypes.STRING,
    url: DataTypes.STRING,
    thumbnails: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        // console.log(models);
        Musics.belongsToMany(models.Tags, {through:'TagMusics', foreignKey:'music_id', otherKey:'tag_id'})
      }
    }
  });
  return Musics;
};
