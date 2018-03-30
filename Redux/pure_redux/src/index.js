import {createStore} from 'redux'

const addType = "ADD";
const mulType = "MUL";

// --- change state upon action
const reducer = (state,action) =>{
    switch(action.type)
    {
        case addType :
        state = state + action.value;
        break;

        case mulType :
        state = state * action.value;
        break;

        default :
        state = null;//not expected
    }

    return state;
}

let state = 0;

const store = createStore(reducer,state);

store.subscribe( () =>{
    console.log("store has changed",store.getState());
} );

// --- action MUST be defined with type as key
store.dispatch({type : addType , value : 3});
store.dispatch({type : mulType , value : 2});
store.dispatch({type : addType , value : -1});
