var express  = require('express');
var app = express();

var hostname = "127.0.0.1";
var port = 3000;
var link = `http://${hostname}:${port}/`;

app.get('/',function (req, res){
    res.sendFile(__dirname + "/src/login.html");
});


app.listen(port, function(){
    console.log(`Server running at `+ link);
});
