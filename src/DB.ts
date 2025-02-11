import mysql from 'mysql2';

// Conexão com o banco de dados Mysql Workbench

const pool = mysql.createPool({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'aluno',
    database: 'api_crud',

});

const promisePool = pool.promise();

export{promisePool};