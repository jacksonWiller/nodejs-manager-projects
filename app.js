const express  = require('express');
const handlebars = require('express-handlebars');
const app = express();

app.engine('handlebars', handlebars({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

//Rotas
//app.get('/',function (req, res){
//  res.sendFile(__dirname + "/src/login.html");
//});

app.get('/', function (req, res) {
  res.render('home');
});

app.get('/addpessoa', function (req, res) {
  res.render('add-pessoa');
});

const hostname = "127.0.0.1";
const port = 3000;
const link = `http://${hostname}:${port}/`;

app.listen(port, function(){
  console.log(`Server running at `+ link);
});



// models
const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodeTest', 'root', 'Jac@1234566', {
  host: 'localhost',
  dialect:'mysql'
});
 
// testar conexão
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const Postagem = sequelize.define('postagens',{
  titulo: {
    type: Sequelize.STRING
  },
  conteudo: {
    type: Sequelize.TEXT
  }
});

//Postagem.sync({ force: true });

const Usuario = sequelize.define('usuario', {
  // attributes
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  sobreNome: {
    type: Sequelize.STRING
  },
  idade: {
    type: Sequelize.INTEGER
  },
  email: {
    type: Sequelize.STRING
  }
});

//Usuario.sync({ force: true });

Usuario.create({ 
  titulo: "tcc-gen", 
  conteudo: "tcc-gen é um gerenciador de tcc" })
  .then(jackson => {
  console.log(nome+"'s auto-generated ID:", jackson.id);
});

Usuario.create({ 
  nome: "Jackson", 
  sobreNome: "Duarte" })
  .then(jackson => {
  console.log(nome+"'s auto-generated ID:", jackson.id);
});


