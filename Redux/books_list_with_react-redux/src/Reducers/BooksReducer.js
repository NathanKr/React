import ActionType from '../Actions/ActionType'

export const books = [
    {name : 'Bible' , description : 'Description of Bible',pagesNum : 1001},
    {name : 'Harry Potter' , description : 'Description of Harry Potter',pagesNum : 312},
    {name : 'GodFather' , description : 'Description of GodFather',pagesNum : 457}
]

const BooksReducer = (state =[] ,action) => {
    switch(action.type){
        case ActionType.getBooks:
        state = {...state , books }
        break

        default :
        //do nothing
    }
    

    return state;
}

export default BooksReducer;