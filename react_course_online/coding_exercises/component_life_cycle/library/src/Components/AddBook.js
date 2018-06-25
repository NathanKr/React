import React, { Component } from 'react';
import './AddBook.css';

class AddBook extends Component {
    state = {isExpanded : false};
    name = '';
    numPages = 0;
    isNew = false;

    render() {
        const addClickHandler = () => {
            this.setState({isExpanded : !this.state.isExpanded});
        };        

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
        }

        const elemExpanded = 
        <div>
        <input type='text' onChange = {nameChangeHandler} placeholder='name'/>
        <br/>
        <input type='number' onChange= {numPagesChangeHandler} placeholder='number of pages'/>
        <br/>
        <label><input onChange={isNewChangeHandler} type='checkbox'/>new</label>
        <br/>
        <button onClick = {saveClickHandler}>Save</button>
        </div>;

        return (
            <div className = 'AddBook'>
                <button style = {{fontSize : '150%'}} onClick={addClickHandler}>Add Book</button>
                <br/>
                {this.state.isExpanded ? elemExpanded : ''}
            </div>
        );
    }
}

export default AddBook;