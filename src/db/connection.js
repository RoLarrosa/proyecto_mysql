const mysql = require("mysql");
const conexion = mysql.createConnection({
    user: 'root',
    host: 'Localhost',
    password: '',
    database: 'proyecto_express'
});

conexion.connect((err) => {
    if (err) {
    console.log("ha ocurrido un error" + err);
    } else {
    console.log("la base de datos se conecto");
    }
});

module.exports = conexion;
