import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import {addFav , removeFav }from "../redux/actions"
import { useEffect,  useState} from 'react'


function Card({
  onClose,
  name,
  status,
  species,
  gender,
  origin,
  image,
  id,
  addFavorites,
  removeFavorites,
  myFavorites
  
}) {



const[isFav, setIsFav]= useState(false);

useEffect(() => {
  myFavorites.forEach((fav) => {
     if (fav.id === id) {
        setIsFav(true);
     }
  });
}, [myFavorites, id]);



function handleFavorite(){

  if (isFav) {
    setIsFav(false);
    removeFavorites(id);
  } else {
    setIsFav(true);
    addFavorites({
      name,
      status,
      species,
      gender,
      origin,
      image,
      id,
    });
  }
}
  return (
    <div>
      { isFav ? 
      (<button onClick={handleFavorite}>❤️</button>) 
    : (<button onClick={handleFavorite}>🤍</button>)
      }
     {onClose && <button onClick={() => onClose(id)}>X</button>}
      <Link to={`/detail/${id}`}>
        <h2>{name}</h2>
      </Link>
      <h2>{status}</h2>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      <h2>{origin?.name}</h2>
      <img src={image} alt='Not Found' />
    </div>
  );
}

export function mapDispatchToProps(dispatch){
  return{
     addFavorites(character){
      dispatch(addFav(character))
          },
      removeFavorites(id){
            dispatch(removeFav(id))
          }
      }    
}

export function mapStateToProps(state){
  return{
    myFavorites: state.myFavorites
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
