const url = 'https://rickandmortyapi.com/api/character/'
const axios = require("axios");


const getCharById=(req, res)=>{
const {id}= req.params
axios(`${url}${id}`)
.then((response)=> {
   if(response.data){
    const {name, gender, specie, origin = origin.name, image, status}=data;
    const character= {name, id, gender, specie, origin, image, status};
    res.status(201).json(character)
}else{ res.status(404).json({mesagge: "not found"})

}
}).catch(error=>{
console.log(error)
res.status(500).json({mesagge: error})
})

}




/*Codigo WEB SERVER

const axios = require("axios");


const getCharById=(res, id)=>{
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({data})=> {
        console.log(data);
        const {name, gender, specie, origin = origin.name, image, status}=data;
        const character= {name, id, gender, specie, origin, image, status};

        res.writeHead(200, { 'Content-Type':  'application/jason/' });
        res.end(JSON.stringify(character));
    }
    ).catch((reason)=> {
        res.writeHead(500, { 'Content-Type':  'text/plain/' });
        res.end(reason.message);
    });

}


module.exports = getCharById; */