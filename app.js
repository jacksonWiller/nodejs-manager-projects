var express  = require('express');
var app = express();

var conect = function (req, res){
    res.send('Hello World!');
}

app.get('/', conect);

app.listen(3000, function(){
    console.log('Hello World!');
});





/*
var hostname = 'localhost';
var port = 8080;

http.createServer(function(req, res){
    res.end("<h1>Hello World</h1>   ");
}).listen(port);

link = `http://${hostname}:${port}/`;

console.log(`Server running at `+ link);
*/