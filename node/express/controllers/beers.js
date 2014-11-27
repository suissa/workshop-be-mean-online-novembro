var mongoose = require('mongoose')
  , Beer = mongoose.model('Beer')
  , msg = '';

module.exports = {
  create: function (req, res, cb) {

    var dados = req.body
      , model = new Beer(dados)
        , objCB = {msgSuccess: 'Cerveja inserida: '}
        ;

    model.save(function (err, data) {
      cb(err, data, res, objCB);
    });
  }
  , retrieve: function (req, res, cb) {

    var query = {}
      , objCB = {
          msgSuccess: 'Cervejas listadas: ',
          view: 'beers/list'
        }
      ;

    Beer.find(query, function (err, data) {
      objCB.data = {beers: data};
      cb(err, data, res, objCB);
    });

  }
  , findOne: function (req, res, cb) {

    var query = {_id: req.params.id}
      , objCB = {msgSuccess: 'Cerveja consultada: ',
          view: 'beers/show'}
      ;

    Beer.findOne(query, function (err, data) {
      objCB.data = {beer: data};
      cb(err, data, res, objCB);
    });

  }
  , update: function (req, res, cb) {

    var query = {_id: req.params.id}
      , mod = req.body
      , optional = {
        upsert: false,
        multi: true
      }
      , objCB = {msgSuccess: 'Cervejas alteradas: '}
      ;

    Beer.update(query, mod, function (err, data) {
      cb(err, data, res, objCB);
    });
  }
  , delete: function (req, res, cb) {

    var query = {_id: req.params.id}
      , objCB = {msgSuccess: 'Cervejas deletadas: '}
      ;

    Beer.remove(query, function(err, data) {
      cb(err, data, res, objCB);
    });
  }
};