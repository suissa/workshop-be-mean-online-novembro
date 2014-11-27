var express = require('express')
  , router = express.Router()
  , Controller = require('../../controllers/beers')
  ;

var cbAPIJSON = function (err, data, res, obj){
  if (err){
    console.log('Erro: ', err);
    msg = 'Erro: ' + err;
  }
  else{
    console.log(obj.msgSuccess, data);
    msg = data;
  }
  res.json(msg);
};

router.get('/', function(req, res) {
  Controller.retrieve(req, res, cbAPIJSON);
});

router.get('/:id', function(req, res) {
  Controller.findOne(req, res, cbAPIJSON);
});

router.post('/', function(req, res) {
  Controller.create(req, res, cbAPIJSON);
});

router.put('/:id', function(req, res) {
  Controller.update(req, res, cbAPIJSON);
});

router.delete('/:id', function(req, res) {
  Controller.delete(req, res, cbAPIJSON);
});

module.exports = router;
