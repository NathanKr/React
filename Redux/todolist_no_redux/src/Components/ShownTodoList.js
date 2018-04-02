import React from 'react';
import PropTypes from 'prop-types';
import Options from '../Logic/Options';
import TodoListItem from '../Components/TodoListItem';


function ShownTodoList(props){
    let elements = [];

    
    const showItem = (option,item) =>{
        let bShow;
        switch(option)
        {
            case Options.ALL:
            bShow = true;
            break;
    
            case Options.ACTIVE:
            bShow = item.todoIsActive;
            break;
    
            case Options.COMPLETED:
            bShow = !item.todoIsActive;
            break;
    
            default:
            bShow = false;
        }

        return bShow;
    }


    elements = props.listToDo.map((item,index) =>{
        return showItem(props.option,item) ?  <TodoListItem  
        clickHandler={
         () => props.toggleIsActiveHandler(index)
        } 
        key={index}>{item}</TodoListItem> : ''}
    );
    

return(<ol style={{display:'inline-block'}}>{elements}</ol>);
}

ShownTodoList.propTypes = {
    listToDo : PropTypes.array.isRequired,
    option : PropTypes.string.isRequired,
    toggleIsActiveHandler : PropTypes.func.isRequired
};

export default ShownTodoList ;