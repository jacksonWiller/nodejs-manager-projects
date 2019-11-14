const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
   res.render("admin/index"); 
})

router.get('/post', (req, res) => {
    res.send("Página de post"); 
 })

 router.get('/categoria', (req, res) => {
    res.render("admin/categorias"); 
 })



module.exports = router;