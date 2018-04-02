import React , {Component}  from 'react';
import FilterToDoList from '../Components/FilterToDoList';
import AddToDo from './AddToDo';
import ShownTodoList from '../Components/ShownTodoList';
import Options from '../Logic/Options'

class ToDoList extends Component{
    
    state = {   listToDo : [] , // array of object todoDescription , todoIsActive
                selectedOptionIndex : 0};

    addTodoHandler = (todoDescription) => {
        if(todoDescription)
        {
            let newList = [...this.state.listToDo];
            newList.push({todoDescription : todoDescription , todoIsActive : true});    
            console.log(newList);   
            this.setState({listToDo : newList});
        }
    };


    toggleIsActiveHandler = (indexTodoListItem) =>{
        let newList = [...this.state.listToDo];
        newList[indexTodoListItem].todoIsActive = !newList[indexTodoListItem].todoIsActive;
        this.setState({listToDo : newList});
    }

    render()
    {
        return (
        <div>
            <AddToDo addTodo = {this.addTodoHandler}/>

            <ShownTodoList  listToDo={this.state.listToDo} 
                            toggleIsActiveHandler = {this.toggleIsActiveHandler}
                            option={Options.options[this.state.selectedOptionIndex]}/>

            <FilterToDoList selectedOptionIndex={this.state.selectedOptionIndex} 
                            setSelectedOptionIndex ={(index) =>{
                                this.setState({selectedOptionIndex : index});
                            }}
            />
        </div>
    );
    }
}

export default ToDoList;