var express  = require('express');
var app = express();
var Sequelize = require('sequilize');

var hostname = "127.0.0.1";
var port = 3000;
var link = `http://${hostname}:${port}/`;

// Option 1: Passing parameters separately
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});
 
connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected as id ' + connection.threadId);
});

app.get('/',function (req, res){
    res.sendFile(__dirname + "/src/login.html");
});


app.listen(port, function(){
    console.log(`Server running at `+ link);
});

