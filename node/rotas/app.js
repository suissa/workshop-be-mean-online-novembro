var http = require('http')
  , db = require('./config/db')
  , Beer = require('./controllers/beers')
  ;


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});

  console.log('URL: ', req.url);
  var route = req.url
    , msg = ''
    ;

  switch (route) {
    case '/beer/create':
      Beer.create(req, res);
    break;
    case '/beer/retrieve':
      Beer.retrieve(req, res);
    break;
    case '/beer/update':
      Beer.update(req, res);
    break;
    case '/beer/delete':
      Beer.delete(req, res);
    break;
    default: res.end('ROTA NAO ENCONTRADA!');
  };

}).listen(3000);
console.log('Server running at http://localhost:3000/');



