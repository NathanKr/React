import React , {Component} from 'react';

class AddVacation extends Component 
{
    state = {vacationDescription : ''};

    render()
    {
        return (
            <div>
                <input type='text' onChange={(evt) => {
                    this.setState({vacationDescription : evt.target.value})
                }}/>
                <button onClick={() =>{
                    this.props.addVacation(this.state.vacationDescription);
                }}>Add Vacation</button>
            </div>);
    }
}



export default AddVacation;