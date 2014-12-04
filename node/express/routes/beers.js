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

// create
router.get('/create', function(req, res) {
  res.render('beers/create');
});

// show
router.get('/:id', function(req, res) {
  Controller.findOne(req, res, cbView);
});

// update
router.get('/:id/edit', function(req, res) {
  Controller.findOneUpdate(req, res, cbView);
});

module.exports = router;
