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
   // --- in this case ...state does nothing because it has only count.
   // --- but its here because in general it should be used
   return {...state , count: newCount};
}

const store = createStore(reducer,initialState);

// --- subscribe is optional
store.subscribe( () =>{
    console.log("store has changed",store.getState());
} );

// --- action MUST be defined with type as key
store.dispatch({type : addType , payLoad : 3});
store.dispatch({type : mulType , payLoad : 2});
store.dispatch({type : addType , payLoad : -1});

 
