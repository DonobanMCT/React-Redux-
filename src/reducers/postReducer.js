import { FETCH_POSTS, NEW_POST } from '../actions/types.js';

//remember the initailState has to be a obecjt data structure 
//this is going to represent our post that come in from actions 
//in our actions folder is where we have to create out fetch call 
const initialState = {
    items: [],
    //single post to send back what we add 
    item: {}
}

export default function(state = initialState, action) {
    //this is very similiar to a if statement the action.type is whats 
    //getting evaluated for it to become true, every action that get sent 
    //to the reducers musy have a type go mre in depth to this study 
    //this line is attach with the dispatch in postActions
    switch(action.type) {
        case FETCH_POSTS:
          return {
            ...state,
                //this line is attach with the dispatch in postActions
                //middleware return
            items: action.payload  
            };
        case NEW_POST:
           return {
            ...state,
            item: action.payload}
        default:
            return state;
    }
}