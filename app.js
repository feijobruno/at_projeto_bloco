//Conexao com BD MySQL
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'XXX',
    user: 'XXX',
    password: 'XXX',
    database: 'u852189744_at_infnet'
});

connection.connect(function(err){
    if (err) console.error('Erro ao realizar a conexão com BD: ' + err.stack); return;
});

connection.query('SELECT * FROM tb_pacientes', function(err, rows, fields){
    if(!err){
        console.log('Resultado: ', rows);
    }else{
        console.log('Erro ao realizar a consulta');
    }
});


