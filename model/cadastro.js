const mongoose = require('mongoose')

const Cadastro = mongoose.model('cadastro',{
    nome:String,
    cpf:String,
    telefone:String,
    celular:String,
    email:String,
    senha:String,
    confirmeSenha:String,   
})

module.exports = Cadastro