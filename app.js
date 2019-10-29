var express  = require('express');
var handlebars = require('express-handlebars');
var app = express();

app.engine('handlebars', handlebars({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

//Rotas
//app.get('/',function (req, res){
//  res.sendFile(__dirname + "/src/login.html");
//});

app.get('/', function (req, res) {
  res.render('home');
});

var hostname = "127.0.0.1";
var port = 3000;
var link = `http://${hostname}:${port}/`;

app.listen(port, function(){
  console.log(`Server running at `+ link);
});


const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('nodeTest', 'root', 'Jac@1234566', {
  host: 'localhost',
  dialect:'mysql'
});
   
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const User = sequelize.define('user', {
  // attributes
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING
    // allowNull defaults to true
  }
});

// Note: using `force: true` will drop the table if it already exists
//User.sync({ force: true });

User.create({ 
  firstName: "Jane", 
  lastName: "Doe" })
  .then(jane => {
  console.log("Jane's auto-generated ID:", jane.id);
});


