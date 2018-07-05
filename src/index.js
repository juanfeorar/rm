'use strict';

//Variables and constants
const mysql = require('mysql');
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const port = process.env.POTY || 3000;
//console.log(process.env.PWD);

//Middlewares
app.use(bodyparser.json());
//app.use(express.json());

//Routes
//app.use(require('./routes/users'));

//Starting the  server
app.listen(port, () => console.log(`Express server is running at port No: ${port}`));

//Create DB connection
var mysqlConnection = mysql.createConnection({
    host    :'localhost',
    user    :'root',
    password:'1234',
    database:'remisiones'
});

//Connetion to DB
mysqlConnection.connect((err)=>{
    if(!err)
        console.log('DB connection succeded');
    else
        console.log('DB connetion failed \n Error: ' + JSON.stringify(err, undefined, 2));
});

//Querys and Routes

//Accede a todo los usuarios
app.get('/security/users', (req, res) => {

mysqlConnection.query('SELECT * from seg_usuario WHERE usu_activo = 1', (err, rows, fields) => {
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
        }
    })
});

//Accede a un usuario por ID
app.get('/security/users/:id', (req, res) => {
    const condition = req.params.id_user;
    res.send(condition);
    //const query = mysqlConnection.query('SELECT * from seg_usuario WHERE usu_activo = ?')
});

app.post('/security/users/', (req, res) => {
    
    const posData = req.body;

    //res.send(200, dataPost);

    var query = mysqlConnection.query("INSERT INTO seg_usuario SET ?",posData, (err, rows, fields) => {
        if(!err){
            res.send('usuario registrado con éxito')
        }else{
            console.log(err);
        }

        console.log(query.sql);
    });

    
});

app.put('/security/users/', (req, res) => {
    
    const posData = req.body;
    const condition = {id_user: req.body.id_user}
    var query = mysqlConnection.query("UPDATE seg_usuario SET ? WHERE ?",[posData, condition], (err, rows, fields) => {
        if(!err){
            res.send('usuario actualizado con éxito');
        }else{
            console.log(err);
        }
        console.log(query.sql);
    });
});

app.delete('/security/users/', (req, res) => {
    const posData = req.body;
    const condition = {id_user: req.body.id_user}
    var query = mysqlConnection.query("UPDATE seg_usuario SET ? WHERE ?",[posData,condition],(err,rows,fields) => {
        if(!err){
            res.send('usuario eliminado con éxito');
        }else{
            console.log(err);
        }
        console.log(query.sql);
    })
});

module.exports = {
    connect: mysqlConnection
}