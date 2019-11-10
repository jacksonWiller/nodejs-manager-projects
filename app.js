// Carregando modulos 
    const express = require('express');
    const handlebars = require('express-handlebars');
    const bodyParse = require('body-parser');
    const app = express();
    // const mongoose = require('mongoose');
// Configurações 
    //Body Parse
        app.use(bodyParse.urlencoded({extended: true}));
        app.use(bodyParse.json());
    //handlebars
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars');
    // Mongoose
        //Em breve
    //
// Rotas

//Outros
const PORT = 8081
app.listen(PORT, ()=>{
    console.log("Servidor rodando! ")
})