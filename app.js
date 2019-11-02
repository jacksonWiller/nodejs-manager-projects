const express  = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');



//Config
  //Template Engine
  app.engine('handlebars', handlebars({defaultLayout:'main'}));
  app.set('view engine', 'handlebars');
  //Body Parser
   app.use(bodyParser.urlencoded({extended: false }))
   app.use(bodyParser.json()); 
  //conexão com o banco de dados MySql
  const sequelize = new Sequelize('nodeTest', 'root', 'Jac@1234566', {
    host: 'localhost',
    dialect:'mysql'
  });


//Rotas
  app.get('/cad', function (req, res) {
    res.render('formpostagem');
  });

  app.post('/add', function (req, res) {
    //res.render('formpostagem');
    res.send("Texto: "+req.body.titulo+" Conteudo: "+req.body.conteudo);
  });



const hostname = "127.0.0.1";
const port = 3000;
const link = `http://${hostname}:${port}/`;

app.listen(port, function(){
  console.log(`Server running at `+ link);
});



// models



 
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
    //llowNull: false
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
  nome: "Jackson", 
  sobreNome: "Duarte",
  idade: 20,
  email: "jacksonwillerduarte@gmail.com"
});
  

/*
.then(jackson => {
  console.log(nome+"'s auto-generated ID:", jackson.id);
});



/*
Usuario.create({ 
  titulo: "tcc-gen", 
  conteudo: "tcc-gen é um gerenciador de tcc",
  idade: 20,
  email: "jacksonwillerduarte@gmail.com"  
})
  .then(jackson => {
  console.log(nome+"'s auto-generated ID:", jackson.id);
});


*/

