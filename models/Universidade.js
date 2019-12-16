const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Universidade = new Schema({
  nomeU: {
    type: String,
    required: true
},
  slugU: {
    type: String,
    required: true
}
  
})

mongoose.model('universidades', Universidade)