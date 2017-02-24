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
    res.render('pages/musics/music',{musics: musics});
  })
});

router.get('/create', function(req, res, next) {
    res.render('pages/musics/create');
});

module.exports = router;
