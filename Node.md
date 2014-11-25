##Node.js

### INTRO - TEORIA

###Hello World

```
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World');
}).listen(3000);
console.log('Server running at http://localhost:3000/');
```


###EXPLICAR O REQ, RES, WRITE, END ETC


```
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html;chaset=utf-8'});
  res.write('<h1>Hello World</h1>');
  res.end('<h2>Hoje está um belo dia :p</h2>');
}).listen(3000);
console.log('Server running at http://localhost:3000/');
```

Para retornamos um HTML lido pelo Node.js utilizaremos o módulo `fs` (FileSystem) para ler/escrever arquivos. Esse módulo é um dos mais importantes do Node.js pois proporciona grandes poderes e com grandes poderes vem grandes responsabilidades :p

```
var http = require('http')
  , fs = require('fs')
  ;

http.createServer(function (req, res) {
  var index = fs.readFileSync('index.html');
  res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
  res.end(index);
}).listen(3000);
console.log('Server running at http://localhost:3000/');
```

###Mongoose

Para conectarmos no MongoDb utilizamos o módulo do `mongoose` com a função `connect`.

```
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/workshop-be-mean');
```

No Mongoose possuímos alguns eventos que nos auxiliam no gerenciamento da conexão com o Mongodb, para isso pegamos a informação do `mongoose.connection`, vamos ver alguns abaixo:

```
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/workshop-be-mean');

var db = mongoose.connection;

db.on('error', function(err){
    console.log('Erro de conexao.', err);
});
db.on('open', function () {
  console.log('Conexão aberta.');
});
db.on('connected', function(err){
    console.log('Conectado');
});
db.on('disconnected', function(err){
    console.log('Desconectado');
});
```


###Rotas

Para iniciarmos nosso sistema de CRUD com rotas vamos abrir o `hello-world.js` do início e salvar ele como `app.js` em uma pasta nova chama `rotas`. Depois vamos jogar o código do `exe03.js` o qual cadastra uma cerveja. Ele deve ficar assim:

```
var http = require('http');
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
  name: { type: String, default: '', required: true },
  description: { type: String, default: '' },
  alcohol: { type: Number, min: 0},
  price: { type: Number, min: 0},
  category: { type: String, default: ''},
  created_at: { type: Date, default: Date.now }
});

var Beer = mongoose.model('Beer', BeerSchema);

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
  }
  else{
    console.log('Cerveja Inserida: ', data);
  }
});

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
  res.write('<h1>Hello World</h1>');
  res.end('<h2>Hoje está um belo dia :p</h2>');
}).listen(3000);
console.log('Server running at http://localhost:3000/');
```


A informação de qual rota está sendo requisitada está em `req.url` como podemos ver no código abaixo:

```
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

var dados = {
  name: 'Skol',
  description: 'Mijo de rato',
  alcohol: 4.5,
  price: 3.0,
  category: 'pilsen'
}

var model = new Beer(dados);

// model.save(function (err, data) {
//   if (err){
//     console.log('Erro: ', err);
//   }
//   else{
//     console.log('Cerveja Inserida: ', data);
//   }
// });


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});

  console.log('URL: ', req.url);

}).listen(3000);
console.log('Server running at http://localhost:3000/');

```


Agora criamos um teste para verificar se é a rota desejada, caso sim ele deve inserir a cerveja, se não deve mostrar `ROTA NAO ENCONTRADA`.

```
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
  var route = req.url;

  if (route === '/beer/create') {
    var dados = {
      name: 'Skol',
      description: 'Mijo de rato',
      alcohol: 4.5,
      price: 3.0,
      category: 'pilsen'
    }

    var model = new Beer(dados)
      , msg = '';

    model.save(function (err, data) {
      if (err){
        console.log('Erro: ', err);
        msg = 'Erro: ' + err;
      }
      else{
        console.log('Cerveja Inserida: ', data);
        msg = 'Cerveja Inserida: ' + JSON.stringify(data);
      }
      res.end(msg);
    });
  } else {
    res.end('ROTA NAO ENCONTRADA!');
  }

}).listen(3000);
console.log('Server running at http://localhost:3000/');

```


Perceba onde está o `res.end` dentro da função assíncrona do mongoose, pois se ela estivesse fora você não conseguiria retornar os dados da função para o `response`.



