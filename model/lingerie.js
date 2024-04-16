const mongoose = require|('mongoose')

const Lingeries = mongoose.model('lingeries', {
    modelo:String,
    tamanho:String,
    cor:String,
    preco:String,
})