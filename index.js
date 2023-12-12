//configuração inicial
const express = require('express')
const app = express()
const cors = requere('cors')

//configuração de banco
const mongoose = require('mongoose')
const Login = require('./model/login')
const Cadastro = require('./model/cadastro')

app.use(cors())

app.use(
    express.urlencoded({
        extended: true
    })
)

//criação das rotas
app.use(express.json())

app.post('/login', async (req, res) => {
    const { email, senha } = req.body
   
    try {
        const usuario = await Cadastro.findOne({email,senha});
        if (usuario){
            res.status(200).json({message: "Login efetuado com suuuuuuuuuucesso!"});
        } else {
            res.status(401).json({message: "Erro ao fazer login. Verificar suas credenciais"});
        }
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
})

app.get('/login', async (req, res) => {
    try {
        const login = await Login.find()
        res.status(200).json(login)
    } catch (error) {
        res.status(500).json({ error: error })
    }

})

app.post('/cadastro', async (req, res) => {
    const {nome, cpf, enderecog, numero, complemento, cep, bairro, cidade, uf, telefone, celular, email, senha, confirmeSenha} = req.body
    const login = {
        nome, 
        cpf, 
        enderecog, 
        numero, 
        complemento, 
        cep, 
        bairro, 
        cidade, 
        uf, 
        telefone, 
        celular, 
        email, 
        senha, 
        confirmeSenha,
    }

    try {
        await cadastro.create(login)
        res.status(201).json({ Message: 'Cadastro realizado com suuuuuuuuuucesso!' })
    } catch (console) {
        res.status(500).json({ error: error })
    }
})

mongoose.connect('mongodb+srv://portohortensia1992:160215@teste.1yb8dry.mongodb.net/')
    .then(() => {
        console.log('Conectou')
        app.listen(3000)

    })

    .catch((err) => console.log(err))