const mysql = require('mysql2');

const conexao = mysql.createConnection({
    host:"localhost",
    port:"3306",
    database:"aulas5b5",
    user:"root",
    password:"12345678"
});

module.exports = conexao;