const express = require('express');
const bodyParser = require('body-parser');
const pessoaRotas = require('./routes/pessoas');

const servidor = express();
const porta = 80;

servidor.use(bodyParser.urlencoded({ extended : false }));
servidor.use(bodyParser.json());
servidor.use(pessoaRotas)


// servidor.get('/pessoa/:idade', (requisicao, resposta) => {
// 	console.log('params:')
// 	console.log(requisicao.params);
// 	console.log('query:')
// 	console.log(requisicao.query);
// 	console.log('body:')
// 	console.log(requisicao.body);
// 	const pessoa = [
// 		{ id:1, nome:'Yan Samtama', idade:20, email:'yansantana@ibm.com'},
// 		{ id:2, nome:'Ana Samtama', idade:18, email:'ana@ibm.com'},
// 		{ id:3, nome:'Antonio Samtama', idade:15, email:'antonio@ibm.com'},
// 	]
// 	// resposta.json(pessoa); // Envia a resposta com o Content-Type setado application/json
// 	resposta.send(pessoa); // Identifica o objeto que vamos enviar e faz a conversao como ele considera melhor
// 	// resposta.send('<b>oi mundo!<b>');
// });

// servidor.post('/pessoa', (requisicao, resposta) => {
// 	console.log(requisicao);
// 	console.log(requisicao.body);
// 	resposta.send(requisicao.body);
// })

servidor.listen(porta, ()=>{
	console.log("Seu servidor foi iniciado no http://localhost:"+porta);
});