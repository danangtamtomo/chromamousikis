'use strict';
module.exports = function(sequelize, DataTypes) {
  var Colors = sequelize.define('Colors', {
    color_code: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Colors.belongsToMany(models.Tags, {through:'ColorTags', foreignKey:'color_id', otherKey:'tag_id'})
      }
    },
    instanceMethods: {
      convertDate: function(datetime) {
        return `${datetime.getDate()-1}-${datetime.getMonth()+1}-${datetime.getFullYear()}` 
      }
    }
  });
  return Colors;
};