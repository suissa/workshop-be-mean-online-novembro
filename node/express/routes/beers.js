var express = require('express')
  , router = express.Router()
  , Controller = require('../controllers/beers')
  ;

/* GET home page. */
router.get('/', function(req, res) {
  res.render('beers/list', { title: 'Workshop Be MEAN' });
});

module.exports = router;
