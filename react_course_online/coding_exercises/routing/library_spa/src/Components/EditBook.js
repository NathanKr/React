import React , {Component} from 'react';
import './BookForm.css';
import { Redirect} from 'react-router-dom';

class EditBook extends Component {
    state = {saved : false};

    constructor(props){
        super(props);
        const book = this.props.getBookAfterEdit();
        console.log(book);
        this.name = book.name;
        this.numPages = book.numPages;
        this.isNew = book.isNew;
        }

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
        this.props.setBookAfterEdit(this.name,this.numPages,this.isNew);
        this.setState({saved : true});          
    }

    const element = 
    <div>
    <input type='text' onChange = {nameChangeHandler} 
           defaultValue = {this.name} />
    <br/>
    <input type='number' onChange= {numPagesChangeHandler} 
            defaultValue = {this.numPages}/>
    <br/>
    <label><input onChange={isNewChangeHandler} type='checkbox'
            defaultChecked = {this.isNew}
    />new</label>
    <br/>
    <button onClick = {saveClickHandler}>Save</button>
    </div>;

    if(this.state.saved){
        return (<Redirect to='/Books'/>);
    }

    return (
        <div>
            <h1>Edit Book</h1>
            <div className = 'BookForm'>
            { element}
            </div>
        </div>
    );
    }
}

export default EditBook;