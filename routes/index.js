var express = require('express');
var router = express.Router();
let searchYoutube = require('youtube-search');

let YoutubeOpts = {
  maxResults: 5,
  key: 'AIzaSyAsdJlWuuDWMrPm4seP4D7y1lUC5FMpXUQ'
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { title: 'Express' });
});

router.get('/search/:keyword', function(req, res, next) {
  return new Promise(function(res, rej) {
    searchYoutube(req.params.keyword, YoutubeOpts, function(err, results) {
      if (err) {
        rej(err)
      }
      else {
        res(results)
      }
    })
  }).then(function(results) {
    res.render('pages/search-result', {results: results})
  })
});

module.exports = router;
