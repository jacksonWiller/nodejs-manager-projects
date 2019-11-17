const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
require("../models/Categoria");
const Categoria = mongoose.model("categorias");


router.get('/', (req, res) => {
   res.render("admin/index"); 
})

router.get('/post', (req, res) => {
    res.send("Página de post"); 
 })

 router.get('/categoria', (req, res) => {
    res.render("admin/categorias"); 
 })

 router.get('/categoria/add', (req, res) => {
   res.render("admin/addCategorias"); 
 })

 router.post('/categorias/nova', (req, res) => {
   
   var erros = [];
   
   if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null){
      erros.push({texto: "nome inválido"})
   }
   
   if(!req.body.slug || typeof req.body.slug == undefined || req.body.slug == null){
      erros.push({texto: "Slug invalido"}
   )}
   
   if(req.body.nome.length < 2){
      erros.push({texto: "Nome da categoria ´e muito pequeno"})
   }

   if(erros.length > 0){
      res.render("admin/addCategorias", {erros: erros})
   }else{
      const novaCategoria = {
         nome: req.body.nome,
         slug: req.body.slug
      }
   
      new Categoria(novaCategoria).save().then(() => {
         console.log("Categiria salva com sucesso!");
         res.redirect("/admin/categorias")
      }).catch((err) => {
         req.flash("error_msg", "Houve um erro ao salvar a categoria, tente novamentr ")
         console.log("Erro ao salvar categoria!"+err);
      })
   }
})





module.exports = router;