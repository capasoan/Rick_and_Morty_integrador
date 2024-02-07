
import { ADD_FAVORITE, REMOVE_FAV } from "./action-types";

import axios from "axios";


export const addFav = (character) =>
async (dispatch) => {
        try{
        const endpointAddFav = 'http://localhost:3001/rickandmorty/fav';
        await axios.post(endpointAddFav, character);
    return dispatch({
      type: ADD_FAVORITE,
      payload: character,
        });

        }catch(error){console.log(error)}
    };

   
   export const removeFav = (id) => 
   async(dispatch) => {
   try{
   const baseURL = 'http://localhost:3001/rickandmorty/fav'
   const endpointRemoveFav = `${baseURL}/${id}`;
   
   await axios.delete(endpointRemoveFav)
   return dispatch({
       type: REMOVE_FAV,
       payload: id
   });

  }catch(error){
   console.log(error)
  }
    };
     
/* PROMESAS
export const removeFav = (id) => {
   const baseURL = 'http://localhost:3001/rickandmorty'
    const endpointRemoveFav = `${baseURL}/fav/${id}`;
    
    return async(dispatch) => {
        const {data}= await axios.delete(endpointRemoveFav)
            return dispatch({
                type: REMOVE_FAV,
                payload: data,
            });
        };
    };

*/
//WEB SERVER
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