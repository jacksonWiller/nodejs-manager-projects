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

 router.get('/categorias', (req, res) => {
   Categoria.find().then((categorias) => {
      res.render("admin/categorias", {categorias: categorias})
   }).catch((err) => {
      req.flash("error-msg","Houve erro ao listar as categorias")
      res.render("admin/");
      console.log("Houve erro ao listar as categorias "+err);
   })
 })

 router.get('/categorias/add', (req, res) => {
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
         req.flash("success_msg", "Categoria criada com sucesso")
         res.redirect("/admin/categorias/")
         console.log("Categoria salva com sucesso")
      }).catch((err) => {
         req.flash("error_msg", "Houve um erro ao salvar a categoria, tente novamente")
         res.redirect("/admin")
      })
   }
})

router.get("/categorias/edit/:id", (req, res) =>{
   Categoria.findOne({_id:req.params.id}).then((categoria) => {
      res.render("admin/editarCategorias", {categoria: categoria})
   }).catch((err) => {
      req.flash("error_msg", "Erro cateoria não existe!")
      res.redirect("/admin/categorias")
   })
})

/*
router.post("/categorias/edit",(req, res) => {

   Categoria.findOne({_id: req.body.id}).then((categoria) => {

      categoria.nome = req.body.nome
      categoria.slug = req.body.slug

      categoria.save().then(() => {
         req.flash("success_msg", "Categoria editada com suuccess!")
         res.redirect("/admin/categorias")
      }).catch((err) => {
         req.flash("error_msg", "Houve erro interno ao salvar a edição da categoria")
         res.redirect("/admin/categorias")
         console.log(err);
      })

   }).catch((err) => {
      req.flash("error_msg", "Houve um erro ao editar a categria")
      res.redirect("/admin/categorias")
      console.log(err);
      console.log(req.body.nome);
      console.log(req.body.slug)
   })
})
*/

router.post('/categorias/edit',(req,res)=>{
  Categoria.findOne({_id:req.body.id}).then((categoria)=>{
      categoria.nome = req.body.nome
      categoria.slug = req.body.slug
      
      categoria.save().then(()=>{
        req.flash('success_msg', 'Categoria editada com sucesso!')
        res.redirect('/admin/categorias')
      }).catch((err)=>{
        req.flash('error_msg', 'Houve um erro ao salvar a categoria!')
        res.redirect('/admin/categorias')
      })
  }).catch((err)=>{
    req.flash('error_msg', 'Houve um erro ao editar a categoria!')
    res.redirect('/admin/categorias')
    console.log(err);
      console.log(req.body.nome);
      console.log(req.body.slug)
  })
})
/*
router.post("/categorias/deletar", (req, res)=> {
   Categoria.remove({_id: req.body.id}).then(() =>{
      res.flash("sucess_msg", "Categoria deletada com sucesso!") 
      res.redirect("/admin/categorias")
   }).catch((err) => {
      req.flesh("error_msg", "Houve um erro ao deletar a categoria")
      res.redirect("/admin/categorias")
   })
})
*/
router.post('/categorias/deletar',(req, res)=>{
   Categoria.deleteOne({_id: req.body.id}).then(()=>{
     req.flash('success_msg', 'Categoria removida com sucesso!')
     res.redirect('/admin/categorias')
   }).catch((err)=>{
     req.flash('error_msg', 'Houve um erro ao remover a categoria!')
     res.redirect('/admin/categorias')
   })
 })

router.post

module.exports = router;