var express = require('express');
const tls = require('tls');
const fs = require('fs');

var app = express();

app.set('port', (process.env.PORT || 8080));

const options = {
    key: fs.readFileSync('tls/server-key.pem'),
    cert: fs.readFileSync('tls/server-crt.pem'),
    ca: fs.readFileSync('tls/ca-crt.pem'),
    requestCert: true,
    rejectUnauthorized: true
}; 

const server = tls.createServer(options, (socket) => {
    socket.pipe(socket);
});

server.listen(process.env.PORT || 8080, () => {
    console.log(`Listening on ${app.get('port')}`)
    console.log(server)
});