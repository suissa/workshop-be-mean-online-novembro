var http = require('http');
 
// Criando o servidor para o proxy
http.Server(function(req, res){
    res.writeHead(200, {
        'Content-Type' : 'application/json; charset=utf-8',
        'Transfer-Encoding' : 'chunked'
    });
 
    setInterval(function(){
 
        res.write(JSON.stringify({
            hello : 'Hello world', date : new Date()
        }) + '\n');
 
    }, 1000);
 
}).listen(8080);
 
setTimeout(function(){
    var client = http.get('http://localhost:8080', function(res){
        res.on('data', function(data){
            console.log(data.toString());
        });
    });
}, 3000);