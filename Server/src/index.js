const express = require('express');
const server = express();
const PORT = 3001;
const router= require("./routes/index")
//const morgan= require('morgan')

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

server.use(express.json())

server.use('/rickandmorty', router);

 
 server.listen(PORT, () => {
     console.log(`Server raised in port:  ${PORT}`);
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
