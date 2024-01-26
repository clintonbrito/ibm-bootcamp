const conexao = require("../settings/conexao");

const validaPessoa = async (requisicao, resposta, proximo) => {

  const { email } = requisicao.body;

  const querySQL = 'SELECT * FROM pessoa WHERE emailpessoa = ?';

  conexao.query(querySQL, [email], (erro, resultados) => {
    // console.log(resultados);
    if (erro) {
      // console.log(erro);
      return resposta.status(500).send('Problemas ao efetuar a consulta');
    }

    if (resultados.length > 0) {
      resposta.status(200).send(resultados);
    } else {
      resposta.status(401).send('Usuário não autorizado');
    }

  });

}

module.exports = {
  validaPessoa,
};