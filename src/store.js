import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index.js';
//this would be the main files for a React Redux boiler plate 

const initialState = {};

const middleware = [thunk];

//store take 3 paramemters for it to work correctly 
//1st reducer 2nd state 3rd enhancer 
const store = createStore(
    rootReducer, 
    initialState, 
    //for redux dev tools to be visible on the console we must add these lines 
    //in the store file to let be able to use in the console 
    compose(  
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

export default store;