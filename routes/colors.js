var express = require('express');
var sequelize = require('../models')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  sequelize.Colors.findAll({
    include: [{
      model: sequelize.Tags,
      thorugh: {
        attributes: ['music_id']
      }
    }]
  }).then(function(colors) {
    //TODO : keluarkan atttribute dari table pivot
    // console.log(colors[0].Tags[0].ColorTags.color_id)
    res.render('color',{colors: colors});
  })
});

router.post('/create', function(req, res, next) {
    sequelize.Colors.create({color_code:req.body.color_code}).then(function() {
        res.redirect('/colors')
    })
})

module.exports = router;
