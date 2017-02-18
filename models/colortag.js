'use strict';
module.exports = function(sequelize, DataTypes) {
  var ColorTag = sequelize.define('ColorTag', {
    color_id: DataTypes.INTEGER,
    tag_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ColorTag;
};