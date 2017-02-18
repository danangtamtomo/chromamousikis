var express = require('express');
var sequelize = require('../models')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  sequelize.Tags.findAll({
    include: [{
      model: sequelize.Musics,
      thorugh: {
        // attributes: ['title']
      }
    }]
  }).then(function(tags) {
    res.render('tag',{tags: tags})
  })
});

router.post('/create', function(req, res, next) {
    sequelize.Tags.create({tag_name:req.body.tag_name}).then(function() {
        res.redirect('/tags')
    })
})

module.exports = router;
