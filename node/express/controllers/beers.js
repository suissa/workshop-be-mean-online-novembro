var mongoose = require('mongoose')
  , Beer = mongoose.model('Beer')
  , msg = '';

module.exports = {
  create: function (req, res, cb) {

    var dados = req.body
      , model = new Beer(dados);

    model.save(function (err, data) {
      cb(err, data, res, 'Cerveja inserida: ');
    });
  }
  , retrieve: function (req, res, cb) {

    var query = {};

    Beer.find(query, function (err, data) {
      cb(err, data, res, 'Cervejas listadas: ');
    });

  }
  , findOne: function (req, res, cb) {

    var query = {_id: req.params.id};

    Beer.findOne(query, function (err, data) {
      cb(err, data, res, 'Cerveja consultada: ');
    });

  }
  , update: function (req, res, cb) {

    var query = {_id: req.params.id}
      , mod = req.body
      , optional = {
        upsert: false,
        multi: true
      };

    Beer.update(query, mod, function (err, data) {
      cb(err, data, res, 'Cervejas alteradas: ');
    });
  }
  , delete: function (req, res, cb) {

    var query = {_id: req.params.id};

    Beer.remove(query, function(err, data) {
      cb(err, data, res, 'Cervejas deletadas: ');
    });
  }
};