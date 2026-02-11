const http = require('http');
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Prueba cambiando el puerto y GitHub\n');
});
server.listen(2000, () => {
    console.log('Servidor corriendo en puerto 2000');
});