const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); // Seu arquivo principal do backend
const expect = chai.expect;

chai.use(chaiHttp);

describe('Cadastro API', () => {
    it('Deve cadastrar um novo usuário', (done) => {
        chai.request(app)
            .post('/cadastro')
            .send({ nome: 'Teste', email: 'teste@example.com', senha: '123456' })
            .end((err, res) => {
                expect(res).to.have.status(201);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('nome').to.equal('Teste');
                expect(res.body).to.have.property('email').to.equal('teste@example.com');
                expect(res.body).to.have.property('senha').to.not.equal('123456'); // A senha não deve ser enviada de volta ao cliente
                done();
            });
    });

    it('Deve retornar um erro se faltar o nome no cadastro', (done) => {
        chai.request(app)
            .post('/cadastro')
            .send({ email: 'teste@example.com', senha: '123456' })
            .end((err, res) => {
                expect(res).to.have.status(500); // Nesse exemplo, estou assumindo que falta de dados causa um erro interno no servidor (500)
                done();
            });
    });

    // Adicione mais testes de validação conforme necessário
});
