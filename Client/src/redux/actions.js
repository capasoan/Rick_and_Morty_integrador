
import { ADD_FAVORITE, REMOVE_FAV } from "./action-types";

export const addFav =(character)=>{
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

}