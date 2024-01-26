const express = require('express');
const servidor = express();
const porta = 8080;

servidor.get('/', (_req, res) => {
	res.send('Hello World!');
});

servidor.listen(porta, () => {
	console.log(`Seu servidor foi iniciado no http://localhost:${porta}`);
});