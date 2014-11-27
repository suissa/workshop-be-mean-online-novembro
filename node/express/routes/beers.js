var express = require('express')
  , router = express.Router()
  , Controller = require('../controllers/beers')
  ;

var cbView = function (err, data, res, obj){
  res.render(obj.view, obj.data);
};

// list
router.get('/', function(req, res) {
  Controller.retrieve(req, res, cbView);
});

// show
router.get('/:id', function(req, res) {
  Controller.findOne(req, res, cbView);
});

module.exports = router;
