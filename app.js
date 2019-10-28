var express  = require('express');
var app = express();

var hostname = "127.0.0.1";
var port = 3000;
var link = `http://${hostname}:${port}/`;


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
User.sync({ force: true }).then(() => {
  // Now the `users` table in the database corresponds to the model definition
  return User.create({
    firstName: 'John',
    lastName: 'Hancock'
  });
});

app.get('/',function (req, res){
    res.sendFile(__dirname + "/src/login.html");
});


app.listen(port, function(){
    console.log(`Server running at `+ link);
});


