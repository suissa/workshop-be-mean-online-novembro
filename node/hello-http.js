var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
  response.write("<h1>Workshop be MEAN</h1>");
  response.write("<h2>Online Outubro</h2>");
  response.end();
}).listen(3000);
console.log('Server running at http://localhost:3000/');


