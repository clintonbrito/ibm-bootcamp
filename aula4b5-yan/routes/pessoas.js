const express = require('express');
const pessoaController = require('../controllers/pessoa');
const validarPessoas = require('../utils/permissoes');

const rotas = express.Router();

rotas.get('/pessoa', validarPessoas, pessoaController.buscarTodasPessoas);
rotas.post('/pessoa', pessoaController.inserirPessoa);
rotas.put('/pessoa', pessoaController.atualizarPessoa);
rotas.delete('/pessoa/:id', pessoaController.apagarPessoa);

module.exports = rotas;