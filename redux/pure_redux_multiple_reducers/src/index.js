import { combineReducers , createStore} from 'redux';
const ActionType = {
    add_book : "ADD_BOOK" ,
    remove_book : "REMOVE_BOOK",
    set_current_user : "SET_CURRENT_USER"};

/* 
    NOTICE : state here is the value of books as defined in 
    combineReducers for bookReducer
*/        
const booksReducer = (state = [], action) => {
    console.log("state argument in booksReducer : ",state);
    switch(action.type){
        case ActionType.add_book:
        state = [...state , action.book];
        break;

        case ActionType.remove_book:
        state = state.filter(book => book.name !== action.name);
        break;

        default:
        // do nothing -> same is state = state        
    }

    return state;
}

/* 
    NOTICE : state here is the value of user as defined in 
    combineReducers for userReducer 
*/        
const userReducer = (state = {}, action) => {
    console.log("state argument in userReducer : ",state);
    switch(action.type){
        case ActionType.set_current_user :
            state = action.user; 
        break;

        default:
        // do nothing -> same is state = state        
    }

    return state;
};

const rootReducer = combineReducers({
    books : booksReducer,
    user  : userReducer
});

// --- no need to define here initialState it is define in reducers
const store = createStore(rootReducer);

// --- subscribe is optional
store.subscribe(() => console.log("store has changed",store.getState()));

// --- action MUST be defined with type as key
store.dispatch({type : ActionType.add_book , 
                book : {name:'Bible' , pages:123}});
store.dispatch({type : ActionType.add_book , 
                book : {name:'Harry Poter' , pages:345}});
store.dispatch({type : ActionType.set_current_user ,
                    user : {firstName : 'Nathan' , lastName : 'Krasney'}});
store.dispatch({type : ActionType.remove_book , 
                name  :  'Harry Poter' });
 
