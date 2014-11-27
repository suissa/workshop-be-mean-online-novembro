var express = require('express')
  , router = express.Router()
  , Controller = require('../controllers/beers')
  ;

var cbView = function (err, data, res, obj){
  res.render(obj.view, {beers: data});
};

router.get('/', function(req, res) {
  Controller.retrieve(req, res, cbView);
});

module.exports = router;
