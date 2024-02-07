
import { ADD_FAVORITE, REMOVE_FAV } from "./action-types";

const initialState={
    myFavorites: [],
    allFavorites:[],
}
function rootReducer(state=initialState, action){

switch(action.type){

case ADD_FAVORITE:
   
    return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload], 
        //allFavorites: [...state.allFavorites, action.payload], 
    };
    //case REMOVE_FAV:
       // return { ...state, myFavorites: action.payload };

       case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(fav => fav.id !== action.payload),
        //allFavorites: state.allFavorites 
    };

default: 
return state

}
}

export default rootReducer;