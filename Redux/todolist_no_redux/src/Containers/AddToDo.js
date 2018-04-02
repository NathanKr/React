import React , {Component} from 'react';
import PropTypes from 'prop-types';

class AddToDo extends Component 
{
    state = {todoDescription : ''};

    render()
    {
        return (
            <div>
                <input type='text' onChange={(evt) => {
                    this.setState({todoDescription : evt.target.value})
                }}/>
                <button onClick={() =>{
                    this.props.addTodo(this.state.todoDescription);
                }}>Add ToDo</button>
            </div>);
    }
}

AddToDo.propTypes = {
    addTodo : PropTypes.func.isRequired
};

export default AddToDo;