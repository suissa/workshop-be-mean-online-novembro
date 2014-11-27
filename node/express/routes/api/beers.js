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

router.put('/:id', function(req, res) {
  Controller.update(req, res);
});

router.delete('/:id', function(req, res) {
  Controller.delete(req, res);
});

module.exports = router;
