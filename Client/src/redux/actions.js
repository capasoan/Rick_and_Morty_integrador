
import { ADD_FAVORITE, REMOVE_FAV } from "./action-types";

import axios from "axios";


export const addFav = (character) => {
    const endpointAddFav = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
       axios.post(endpointAddFav, character).then(({ data }) => {
          console.log('addFav response:', data);
          return dispatch({
             type: ADD_FAVORITE,
             payload: data,
          });
       });
    };
 };

export const removeFav = (id) => {
   const baseURL = 'http://localhost:3001/rickandmorty'
    const endpointRemoveFav = `${baseURL}/fav/${id}`;
    return (dispatch) => {
        axios.delete(endpointRemoveFav).then(({ data }) => {
            return dispatch({
                type: REMOVE_FAV,
                payload: data,
            });
        });
    };
};


/*export const addFav =(character)=>{
    return {
        type: ADD_FAVORITE,
        payload: character
    }

}
export const removeFav =(id)=>{
    return {
        type: REMOVE_FAV,
        payload: id
    }

}*/