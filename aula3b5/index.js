// const meuNome = process.argv.slice(2)

// console.log("oi mundo! Eu sou o "+meuNome)

// const meuNomeVariavel = process.env.MEU_NOME;

// console.log(meuNomeVariavel);


// const numeros = [1,2,3,4,5];

// const soma = numeros.reduce((acumulador, valorCorrente) => {
// 	return acumulador + valorCorrente;
// }, 0);

// console.log(soma);

// const numerosencontrado = numeros.find((numero) => numero > 3);

// console.log(numerosencontrado);

// const mapaDeValores = numeros.map((numero) => numero * 2);
// console.log(mapaDeValores);

// console.log("Alteracao sem restart!")


const http = require('http');
const url = require('url')

const servidor = http.createServer((requisicao, resposta) => {
	const parserUrl = url.parse(requisicao.url, true);
	const path = parserUrl.pathname;
	// resposta.end("Oi mundo");
	// console.log(path);


	if(path == '/'){
		switch (requisicao.method) {
			case 'GET':
				resposta.writeHead(200, {'Content-Type':'text-plain'});
				resposta.end('Requisicao do tipo get');
				break;
			case 'POST':
				resposta.writeHead(200, {'Content-Type':'text-plain'});
				resposta.end('Requisicao do tipo post');
				break;
			case 'PUT':
				resposta.writeHead(200, {'Content-Type':'text-plain'});
				resposta.end('Requisicao do tipo put');
				break;
			case 'DELETE':
				resposta.writeHead(200, {'Content-Type':'text-plain'});
				resposta.end('Requisicao do tipo delete');
				break;
			default:
				resposta.writeHead(404);
				resposta.end();
				break;
		}
	} else if (path == '/pessoa'){
		resposta.writeHead(200);
		resposta.end("pessoa");
	} else {
		resposta.writeHead(404);
		resposta.end();
	}
});

const porta = 80;

servidor.listen(porta, ()=>{
	console.log("Seu servidor foi iniciado no http://localhost:"+porta);
})