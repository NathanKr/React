import React from 'react';
import PropTypes from 'prop-types';

function TodoListItem(props)
{
    return(<li style={{margin:'10px'}} onClick={props.clickHandler}>{
                        props.children.todoIsActive ?
                        props.children.todoDescription :
                        <del>{props.children.todoDescription}</del>}</li>);
}

TodoListItem.propTypes = {
    clickHandler : PropTypes.func.isRequired
}

export default TodoListItem;