const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Universidade = new Schema({
  nome:{
    type: String,
    required: true
  },
  tipo:{
    type: String,
    required: true
  },
  descricao:{
    type: String,
    required: true
  }
  
})

mongoose.model('universidades', Universidade)