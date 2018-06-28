import React , {Component} from 'react';
import './BookForm.css';
import { Redirect} from 'react-router-dom';

class AddBook extends Component {
    state = {saved : false};
    name = '';
    numPages = 0;
    isNew = false;

    render(){
    const nameChangeHandler = (evt) =>{
        this.name = evt.target.value;
    }

    const numPagesChangeHandler = (evt) =>{
        this.numPages= evt.target.value;
    }

    const isNewChangeHandler = (evt) =>{
        this.isNew = evt.target.checked;
    }


    const saveClickHandler = () => {
        this.props.saveClickHandler(
            this.name , 
            this.numPages, 
            this.isNew);
        this.setState({saved : true});          
    }

    const element = 
    <div>
    <input type='text'  onChange = {nameChangeHandler} placeholder='name'/>
    <br/>
    <input type='number' onChange= {numPagesChangeHandler} placeholder='number of pages'/>
    <br/>
    <label><input onChange={isNewChangeHandler} type='checkbox'/>new</label>
    <br/>
    <button onClick = {saveClickHandler}>Save</button>
    </div>;

    if(this.state.saved){
        return (<Redirect to='/Books'/>);
    }

    return (
        <div>
            <h1>Add Book</h1>
            <div className = 'BookForm'>
            { element}
            </div>
        </div>
    );
    }
}

export default AddBook;