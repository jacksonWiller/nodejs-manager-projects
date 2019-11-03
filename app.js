const express  = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/Postagem');

//Config
  //Template Engine
  app.engine('handlebars', handlebars({defaultLayout:'main'}));
  app.set('view engine', 'handlebars');
  //Body Parser
   app.use(bodyParser.urlencoded({extended: false }))
   app.use(bodyParser.json()); 
  

//Rotas

app.get('/', function (req, res) {
  Post.findAll().then(function(posts){
    res.render('home', {posts: posts})
  })  
})

app.get('/cad', function (req, res) {
    res.render('formpostagem');
  });

  app.post('/add', function (req, res) {
    Post.create({
      titulo: req.body.titulo,
      conteudo : req.body.conteudo
    }).then(function(){
      res.redirect("/")
    }).catch(function(erro){
      res.send("Houve um erro: "+ erro)
    })
  });


const hostname = "127.0.0.1";
const port = 3000;
const link = `http://${hostname}:${port}/`;

app.listen(port, function(){
  console.log(`Server running at `+ link);
});