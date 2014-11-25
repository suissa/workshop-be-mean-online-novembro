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

