import {applyMiddleware , createStore} from 'redux';
import logger from 'redux-logger';


const addType = "ADD";
 let initialState = {count : 0};

const myLogger = (store) => (next) => (action) => {
    console.log("myLogger action fired : ",action);
    next(action);// call next otherwise reducer will not be called
}

const middleware = applyMiddleware(
    myLogger , 
    logger
);

const reducer = (state,action) =>{
    const newCount = (action.type === addType) ? (state.count + action.payLoad) : state.count;

   return {...state , count: newCount};
}

const store = createStore(reducer,initialState,middleware);

store.subscribe( () =>{
    console.log("store changed : ",store.getState());
} );

// --- action MUST be defined with type as key
store.dispatch({type : addType , payLoad : 3});
store.dispatch({type : addType , payLoad : -1});

 
