const conexao = require("../settings/conexao")

const buscarTodasPessoas = (requisicao, resposta) => {
    const querySQL = 'SELECT p.idpessoa as id, p.nomepessoa as nome, p.idadepessoa as idade, p.emailpessoa as email FROM pessoa p';

    conexao.query(querySQL, (error, retorno) => {
        if(error){
            console.log(error);
            resposta.status(500).send("Problemas ao efetuar a consulta");
        } else {
            resposta.status(200).send(retorno);
        }
    });
}

const inserirPessoa = (requisicao, resposta) => {
    const pessoa = requisicao.body;
    if(!pessoa.id){
        const querySQL = `INSERT INTO pessoa (nomepessoa, idadepessoa, emailpessoa) VALUES (?, ?, ?)`;
        const valores = [pessoa.nome, pessoa.idade, pessoa.email];

        conexao.query(querySQL, valores, (error, retorno) => {
            if(error){
                console.log(error);
                resposta.status(500).send("Problemas ao inserir pessoa");
            } else {
                resposta.status(200).send();
            }
        });
    } else {
        resposta.status(500).send("Problemas ao inserir pessoa");
    }
}

const atualizarPessoa = (requisicao, resposta) => {
    const pessoa = requisicao.body;
    if(pessoa.id){
        let querySQL = `UPDATE pessoa SET `;
        let valores = [];

        if(pessoa.nome){
            querySQL+= `nomepessoa = ?,`;
            valores.push(pessoa.nome);
        }

        if(pessoa.idade){
            querySQL+= `idadepessoa = ?,`;
            valores.push(pessoa.idade);
        }

        if(pessoa.email){
            querySQL+= `emailpessoa = ?,`;
            valores.push(pessoa.email);
        }

        querySQL = querySQL.substring(0, querySQL.length - 1);
        querySQL+= ` WHERE (idpessoa = ?)`;
        valores.push(pessoa.id);

        console.log(querySQL);
        conexao.query(querySQL, valores, (error, retorno) => {
            if(error){
                console.log(error);
                resposta.status(500).send("Problemas ao atualizar pessoa");
            } else {
                resposta.status(200).send();
            }
        });
    } else {
        resposta.status(500).send("Problemas ao atualizar pessoa");
    }
}

const apagarPessoa = (requisicao, resposta) => {
    const id = requisicao.params.id;
    if(id){
        const querySQL = `DELETE FROM pessoa WHERE (idpessoa = ?)`;
        const valores = [id];

        conexao.query(querySQL, valores, (error, retorno) => {
            if(error){
                console.log(error);
                resposta.status(500).send("Problemas ao apagar pessoa");
            } else {
                resposta.status(200).send();
            }
        });
    } else {
        resposta.status(500).send("Problemas ao apagar pessoa");
    }
}

module.exports = {buscarTodasPessoas, inserirPessoa, atualizarPessoa, apagarPessoa}