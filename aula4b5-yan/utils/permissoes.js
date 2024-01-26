const validaPessoa = (requisicao, resposta, proximo) => {
    // usem a imaginação para montar uma regra de validação!
    const pessoaLogada = true;
    if(pessoaLogada){
        proximo();
    } else {
        resposta.status(401).send('Usuario nao autorizado');
    }
}

module.exports = validaPessoa;