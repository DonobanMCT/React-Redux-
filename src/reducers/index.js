import  { combineReducers } from 'redux';
import postReducer from  './postReducer';
//we always want to combine all of our reducers for it to be more clean
//and of course have a good seperation of concerns 

export default combineReducers({
    posts: postReducer  
});