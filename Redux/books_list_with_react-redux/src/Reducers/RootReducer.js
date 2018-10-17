import {combineReducers} from 'redux'
import BooksReducer from './BooksReducer'
import CurrentBookReducer from './CurrentBookReducer'

const RootReducer = combineReducers({
    books : BooksReducer,
    currentBook : CurrentBookReducer
});

export default RootReducer;
