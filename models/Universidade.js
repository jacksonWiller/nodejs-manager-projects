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
  },
  conteudo:{
    type: String,
    required: true
  },
  categoria:{
    type: Schema.Types.ObjectId,
    ref: 'categorias',
    required: true
  },
  data:{
    type: Date,
    default: Date.now()
  }
})

mongoose.model('universidades', Universidade)