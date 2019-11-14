// Carregando modulos 
    const express = require('express');
    const handlebars = require('express-handlebars');
    const bodyParse = require('body-parser');
    const app = express();
    const admin = require("./routes/admin");
    const path = require("path");
    // const mongoose = require('mongoose');
// Configurações 
    //Body Parse
        app.use(bodyParse.urlencoded({extended: true}));
        app.use(bodyParse.json());
    //handlebars
        app.engine('handlebars', handlebars({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');
    // Mongoose
        //Em breve
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