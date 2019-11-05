const mogoose = require("mongoose");

// Configurando o mongoose
    mogoose.Promise = global.Promise;
    mogoose.connect("mongodb://localhost/mongoosetest", {
        useMongoClient: true
    }).then(() => {
        console.log("MongoDB Conectado...")
    }).catch((err) => {
        console.log("Houve um erro ao se conectar ao mongoDB: "+err)
    });
