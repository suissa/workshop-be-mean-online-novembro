var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/workshop-online-novembro-2014');

var db = mongoose.connection;
db.on('error', function(err){
    console.log('Erro de conexao.', err)
});
db.on('open', function () {
  console.log('Conexão aberta.')
});
db.on('connected', function(err){
    console.log('Conectado')
});
db.on('disconnected', function(err){
    console.log('Desconectado')
});
var Schema = mongoose.Schema;

var BeerSchema = new Schema({
  name: { type: String, default: '' },
  description: { type: String, default: '' },
  alcohol: { type: Number, min: 0},
  category: { type: String, default: ''},
  created: { type: Date, default: Date.now },
});

var Beer = mongoose.model('Beer', BeerSchema);

var query = {name: /brahma/i};

var mod = {
  name: 'Brahma',
  alcohol: 4,
  price: 6,
  category: 'pilsen'
};

var optional = {
  upsert: true,
  multi: false
};

Beer.update(query, mod, optional, function (err, data) {
  if (err){
    console.log('Erro: ', err);
  }
  else{
    console.log('Cervejas atualizadas com sucesso: ', data);
  }
  process.exit(0);
});



