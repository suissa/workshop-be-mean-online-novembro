var mongoose = require('mongoose')
  , Beer = mongoose.model('Beer')
  , msg = '';

module.exports = {
  create: function (req, res) {

    var dados = req.body
      , model = new Beer(dados);

    model.save(function (err, data) {
      if (err){
        console.log('Erro: ', err);
        msg = 'Erro: ' + err;
      }
      else{
        console.log('Cerveja Inserida: ', data);
        msg = data;
      }
      res.json(msg);
    });
  }
  , retrieve: function (req, res) {

    var query = {};

    Beer.find(query, function (err, data) {
      if (err) {
        console.log('Erro: ', err);
        msg = 'Erro: ' + err;
      } else {
        console.log('Listagem: ', data);
        msg = data;
      }
      res.json(msg);
    });

  }
  , findOne: function (req, res) {

    var query = {_id: req.params.id};

    Beer.findOne(query, function (err, data) {
      if (err) {
        console.log('Erro: ', err);
        msg = 'Erro: ' + err;
      } else {
        console.log('Listagem: ', data);
        msg = data;
      }
      res.json(msg);
    });

  }
  , update: function (req, res) {

    var query = {name: /skol/i}
      , mod = {
        alcohol: 666,
      }
      , optional = {
        upsert: false,
        multi: true
      };

    Beer.update(query, mod, optional, function (err, data) {
      if (err){
        console.log('Erro: ', err);
        msg = 'Erro: ' + err;
      }
      else{
        console.log('Cervejas atualizadas com sucesso: ', data);
        msg = 'Cervejas alteradas: ' + data;
      }
      res.json(msg);
    });
  }
  , delete: function (req, res) {

    var query = {name: /skol/i};

    // É multi: true CUIDADO!
    Beer.remove(query, function(err, data) {
      if(err) {
        console.log(err);
        msg = 'Erro: ' + err;
      } else {
        console.log('Cerveja deletada com sucesso, quantidade: ', data);
        msg = 'Cervejas deletadas: ' + data;
      }
      res.json(msg);
    });
  }
};