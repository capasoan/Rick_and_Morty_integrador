const axios = require("axios");
const URL = 'https://rickandmortyapi.com/api/character/'


//ASYNC/AWAIT
const getCharById = async (req, res) => {
    const { id } = req.params;
    try {
    const { data } = await axios.get(`${URL}/${id}`);
        if(data.name){
        const character ={ 
            name, 
            gender, 
            species, 
            origin = origin.name, 
            image, 
            status } = data;
        res.status(201).json(character);
    } }catch (error) {
        if (error.message.includes("404")) {
            res.status(404).json({ error: "character not found" });
        } else {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = getCharById;


//PROMESAS
/*

const getCharById=(req, res)=>{
const {id}= req.params
axios.get(`${URL}${id}`)
.then(({data})=> {
   if(data){
    const {name, gender, species, origin = origin.name, image, status}=data
    const character= {name, id, gender, species, origin, image, status}
    res.status(201).json(character)
}else{ res.status(404).json({message: "AQUI HAY ERROR"})

}
}).catch(error=>{
console.log(error)
res.status(500).json({message: error.message})
})}


module.exports = getCharById;*/


/*WEB SERVER

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

*/
