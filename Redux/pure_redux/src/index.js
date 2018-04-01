import {createStore} from 'redux'
const addType = "ADD";
const mulType = "MUL";
 let initialState = {count : 0};

const reducer = (state,action) =>{
    let newCount;
   switch(action.type){
       case addType :
       newCount = state.count + action.payLoad;
       break;

       case mulType :
       newCount = state.count * action.payLoad;
       break;

       default :
       newCount=state.count;
   }
   return {...state , count: newCount};
}

const store = createStore(reducer,initialState);
store.subscribe( () =>{
    console.log("store has changed",store.getState());
} );
// --- action MUST be defined with type as key
store.dispatch({type : addType , payLoad : 3});
store.dispatch({type : mulType , payLoad : 2});
store.dispatch({type : addType , payLoad : -1});

 
