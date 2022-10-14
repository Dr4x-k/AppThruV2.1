const app = require('../app');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host    : process.env.DB_HOST,
    user    : process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME
});

connection.connect((error) => {
    if (error) {
        console.log('Hay error en la conexion: ' + error);
        return;
    }
    console.log('Conexion con la base de datos establecida!');
});

module.exports = connection;