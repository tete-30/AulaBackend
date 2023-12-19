const mongoose = require('mongoose')

const Cadastro = mongoose.model('cadastro',{
    nome:String,
   /* cpf:String,
    endereco:String,
    numero:Number,
    complemento:String,
    cep:String,
    bairro:String,
    cidade:String,
    uf:String,
    telefone:String,
    celular:String,
    email:String,
    senha:String,
    confirmeSenha:String, */   
})

module.exports = Cadastro