import React , {Component}  from 'react';
import FilterVacationList from '../Components/FilterVacationList';
import AddVacation from '../Components/AddVacation';
import ShownVacationList from '../Components/ShownVacationList';
import Options from '../Logic/Options'

class VacationList extends Component{
    
    state = {   listVacations : [] , // array of object vacationDescription , vacationIsActive
                selectedOptionIndex : 0};

    addVacationHandler = (vacationDescription) => {
        if(vacationDescription)
        {
            let newList = [...this.state.listVacations];
            newList.push({vacationDescription : vacationDescription , vacationIsActive : true});    
            console.log(newList);   
            this.setState({listVacations: newList});
        }
    };


    toggleIsActiveHandler = (indexVacationListItem) =>{
        let newList = [...this.state.listVacations];
        newList[indexVacationListItem].vacationIsActive = !newList[indexVacationListItem].vacationIsActive;
        this.setState({listVacation : newList});
    }

    render()
    {
        return (
        <div>
            <h2>Vacations Wish List</h2>
            <AddVacation addVacation = {this.addVacationHandler}/>

            <ShownVacationList  listVacation={this.state.listVacations} 
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