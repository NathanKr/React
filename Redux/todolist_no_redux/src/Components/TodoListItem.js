import React from 'react';
import PropTypes from 'prop-types';

function TodoListItem(props)
{
    return(<p onClick={props.clickHandler}>{
                        props.children.todoIsActive ?
                        props.children.todoDescription :
                        <del>{props.children.todoDescription}</del>}</p>);
}

TodoListItem.propTypes = {
    clickHandler : PropTypes.func.isRequired
}

export default TodoListItem;