// Carregando modulos 
    const express = require('express');
    const handlebars = require('express-handlebars');
    const bodyParse = require('body-parser');
    const app = express();
    const admin = require("./routes/admin");
    const path = require("path");
    const mongoose = require('mongoose');
    const session = require('express-session');
    const flash = require('connect-flash');
// Configurações 
    //sessão
        app.use(session({
            secret: "cursodenode",
            resave: true,
            saveUninitialized: true
        }))
        app.use(flash());

    //Middleware
        app.use((req, res, next) => {
            res.locals.nome = seccess_msg = req.flash("success_msg");
            res.locals.error_msg = req.flash("error_msg");
            next();
        })

    //Body Parse
        app.use(bodyParse.urlencoded({extended: true}));
        app.use(bodyParse.json());
    //handlebars
        app.engine('handlebars', handlebars({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');
    // Mongoose
        mongoose.Promise = global.Promise;
        mongoose.connect("mongodb://localhost/blogapp").then(() => {
            console.log("Conectado ao mongo");  
        }).catch((err) => {
            console.log("Erro ao se conectar:"+err)
        })
    // Public
        app.use(express.static(path.join(__dirname,"public")));

// Rotas
    app.get('/', (req, res) => {
        res.send("Página de post"); 
    })

    app.get('/post', (req, res) => {
        res.send("lista de post"); 
    })

    app.use('/admin', admin);
    
//Outros
const PORT = 8081
app.listen(PORT, ()=>{
    console.log("Servidor rodando! ");
});