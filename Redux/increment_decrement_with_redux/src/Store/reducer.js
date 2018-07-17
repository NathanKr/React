import ActionType from '../Logic/ActionType';

const initialState = {count : 0};

const reducer = (state =  initialState, action) =>{
    console.log("reducer",state);

    switch(action.type){
        case ActionType.ADD :
            state = {...state , count : state.count+action.payLoad};
        break;

        default:
        state = {...state};
    }

    return state;
}

export default reducer;