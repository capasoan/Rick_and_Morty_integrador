const http = require('http');
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
});
