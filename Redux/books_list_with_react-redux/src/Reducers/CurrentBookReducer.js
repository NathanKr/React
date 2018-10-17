import ActionType from '../Actions/ActionType'

const CurrentBookReducer = (state={},action) =>{
    switch(action.type){
        case ActionType.setCurrentBook:
            state={
                ...state , 
                ...action.payload
            }
        break;

        default:
        //do nothing
        break;
    }
    return state;
}

export default CurrentBookReducer;