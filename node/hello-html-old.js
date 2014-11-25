var http = require('http');
var fs = require('fs');
var index = fs.readFileSync('index.html');

http.createServer(function (req, res) {
 res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
 res.end(index);
}).listen(3000);
console.log('Servidor rodando em localhost:3000');