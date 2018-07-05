'use strict';

const http = require('http');
const config = require('./config');
const hostname = 'localhost';

const server = http.createServer((req, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    response.end('Hola Mundo');
});

server.listen(config.port, hostname, () => {
    console.log(`El servidor se está ejecutando en http://${hostname}:${config.port}/`);
});
module.exports.server;