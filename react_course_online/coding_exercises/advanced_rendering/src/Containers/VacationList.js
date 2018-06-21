import React , {Component}  from 'react';
import FilterVacationList from '../Components/FilterVacationList';
import AddVacation from './AddVacation';
import ShownVacationList from '../Components/ShownVacationList';
import Options from '../Logic/Options'

class VacationList extends Component{
    
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
            <AddVacation addTodo = {this.addTodoHandler}/>

            <ShownVacationList  listToDo={this.state.listToDo} 
                            toggleIsActiveHandler = {this.toggleIsActiveHandler}
                            option={Options.options[this.state.selectedOptionIndex]}/>

            <FilterVacationList selectedOptionIndex={this.state.selectedOptionIndex} 
                            setSelectedOptionIndex ={(index) =>{
                                this.setState({selectedOptionIndex : index});
                            }}
            />
        </div>
    );
    }
}

export default VacationList;