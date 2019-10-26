//var express  = require('express');
//var app = express();


const http = require('http');

var conec = function (req, res){
    res.end('Hello World!');
}

http.createServer(conec);

http.listen(3000);





/*
var hostname = 'localhost';
var port = 8080;

http.createServer(function(req, res){
    res.end("<h1>Hello World</h1>   ");
}).listen(port);

link = `http://${hostname}:${port}/`;

console.log(`Server running at `+ link);
*/