var http = require('http')
  , mongoose = require('mongoose');

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
  name: { type: String, default: '', required: true },
  description: { type: String, default: '' },
  alcohol: { type: Number, min: 0},
  price: { type: Number, min: 0},
  category: { type: String, default: ''},
  created_at: { type: Date, default: Date.now }
});

var Beer = mongoose.model('Beer', BeerSchema);



http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});

  console.log('URL: ', req.url);
  var route = req.url
    , msg = '';

  switch (route) {
    case '/beer/create':
      var dados = {
        name: 'Skol',
        description: 'Mijo de rato',
        alcohol: 4.5,
        price: 3.0,
        category: 'pilsen'
      }

      var model = new Beer(dados);

      model.save(function (err, data) {
        if (err){
          console.log('Erro: ', err);
          msg = 'Erro: ' + err;
        }
        else{
          console.log('Cerveja Inserida: ', data);
          msg = 'Cerveja inserida: ' + JSON.stringify(data);
        }
        res.end(msg);
      });
    break;
    case '/beer/retrieve':
      Beer.find(query, function (err, data) {
      if (err) {
        console.log('Erro: ', err);
          msg = 'Erro: ' + err;
      } else {
        console.log('Listagem: ', data);
          msg = 'Cervejas listadas: ' + JSON.stringify(data);
      }
      res.end(msg);
    });

    break;
    case '/beer/update':
      var query = {name: /skol/i};

      var mod = {
        alcohol: 666,
      };

      var optional = {
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
        res.end(msg);
      });
    break;
    case '/beer/delete':
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
        res.end(msg);
      });
    break;
    default: res.end('ROTA NAO ENCONTRADA!');
  };

}).listen(3000);
console.log('Server running at http://localhost:3000/');



