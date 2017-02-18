var express = require('express');
var sequelize = require('../models')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  sequelize.Musics.findAll({
    include: [{
      model: sequelize.Tags,
      thorugh: {
        attributes: ['tag_name']
      }
    }]
  }).then(function(musics) {
    res.render('music',{musics: musics});
  })
});

module.exports = router;
