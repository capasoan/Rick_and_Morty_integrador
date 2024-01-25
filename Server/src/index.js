const express = require('express');
const server = express();
const PORT = 3001;
const morgan= require('morgan')

server.listen(PORT, () => {
    console.log('Server raised in port: ' + PORT);
});

//Codigo WEB SERVER
/*const http = require('http');
const PORT = 3001;
const getCharById= require("./controllers/getCharById")

http.createServer((req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    const { url } = req;

    if(url.includes("/rickandmorty/character")) {
        const id= Number(url.slice(-1));
        getCharById(res, id)
        } else {
            res.writeHead(400, { 'Content-Type': 'application/jason/' });
            res.end(JSON.stringify({error: "Rout NOT found"}));
        }

        
}).listen(PORT, () => {
    console.log(`Servidor corriendo en: ${PORT}`);
});*/
