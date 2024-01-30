let myFavorites = [];

function postFav(req, res) {
    const newFavorite = req.body;
    const existingFavorite = myFavorites.find(fav => fav.id === newFavorite.id);

    if (!existingFavorite) {
        myFavorites.push(newFavorite);
    }

    res.json(myFavorites);
}

function deleteFav(req, res) {
    const { id } = req.params;
    
   // eliminados = myFavorites.filter((fav) => fav.id !== id);
    //myFavorites = eliminados;

    myFavorites = myFavorites.filter(fav => fav.id !== id);

    res.json(myFavorites);
}

module.exports = {
    postFav,
    deleteFav
};