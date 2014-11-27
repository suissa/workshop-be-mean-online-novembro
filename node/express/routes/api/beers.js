var express = require('express')
  , router = express.Router()
  , Controller = require('../../controllers/beers')
  ;

router.get('/', function(req, res) {
  Controller.retrieve(req, res);
});

router.get('/:id', function(req, res) {
  Controller.findOne(req, res);
});

router.post('/', function(req, res) {
  Controller.create(req, res);
});

module.exports = router;
