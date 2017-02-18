'use strict';
var Musics = require('./musics')
module.exports = function(sequelize, DataTypes) {
  var Tags = sequelize.define('Tags', {
    tag_name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Tags.belongsToMany(models.Musics, {through:'TagMusics', foreignKey:'tag_id', otherKey:'music_id'})
      }
    },
    instanceMethods: {
      convertDate: function(datetime) {
        return `${datetime.getDate()-1}-${datetime.getMonth()+1}-${datetime.getFullYear()}` 
      }
    }
  });
  return Tags;
};