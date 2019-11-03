
///crando servidor nodejs

var hostname = 'localhost';
var port = 8080;

http.createServer(function(req, res){
    res.end("<h1>Hello World</h1>   ");
}).listen(port);

link = `http://${hostname}:${port}/`;

console.log(`Server running at `+ link);

//app.get('/',function (req, res){
//  res.sendFile(__dirname + "/src/login.html");
//});

// models



/* 
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

app.post('/add', function (req, res) {
    //res.render('formpostagem');
    res.send("Texto: "+req.body.titulo+" Conteudo: "+req.body.conteudo);
  });

*/