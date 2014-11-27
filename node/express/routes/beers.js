var express = require('express')
  , router = express.Router()
  , Controller = require('../controllers/beers')
  ;

router.get('/', function(req, res) {
  Controller.retrieve(req, res);
});

module.exports = router;
