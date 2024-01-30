
import { ADD_FAVORITE, REMOVE_FAV } from "./action-types";

const initialState={
    myFavorites: [],
    allFavorites:[]
}
function rootReducer(state=initialState, action){

switch(action.type){

case ADD_FAVORITE:
    return { ...state,
        myFavorites:  action.payload, 
        allFavorites: action.payload };
    case REMOVE_FAV:
        return { ...state, myFavorites: action.payload };

default: 
return state

}
}

export default rootReducer;