import {createStore , applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';

const initialState={
    posts:[] ,
    loading:false,
    loaded:false,
    err:''
};

const reducer = (state=initialState,action) => {
    switch(action.type){
        case 'FETCH_POSTS_START':
        state = {
            ...state , 
            loading:true};
        break;

        case 'FETCH_POSTS_FINISH' :
        state = {
            ...state ,
            loading:false , 
            loaded : true,
            posts:action.payload};
        break;

        case 'FETCH_POSTS_ERROR' :
        state = {
            ...state , 
            loading:false , 
            err:action.payload};
        break;

        default:
        //do nothing , return the state we got
    }

    return state;
}

const middleWare = applyMiddleware(thunk,logger);
const store = createStore(reducer,middleWare);
const url = 'https://jsonplaceholder.typicode.com/posts';


// --- dispatch with function as argument can be invoked ONLY
// --- by middleware such as redux-thunk
store.dispatch(dispatch => {
    dispatch({type:'FETCH_POSTS_START'});

    axios.get(url).then(response =>{
        dispatch({
            type:'FETCH_POSTS_FINISH' , 
            payload:response.data});
    }).catch(err =>{
        dispatch({
            type:'FETCH_POSTS_ERROR',
            payload:err});
    });

});


