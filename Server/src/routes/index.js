const router = require("express").Router()

//const express= require("express") 
//const router= express.Router()

const login = require("../controllers/login")
const getCharByID = require("../controllers/getCharById")
const {deleteFav, postFav} = require("../controllers/handleFavorites")

router.get("/character/:id", getCharByID)
router.get("/login", login)
router.post("/fav", postFav)
router.delete("/fav/:id", deleteFav)

module.exports= router;



