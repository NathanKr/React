import React, { Component } from 'react';
import './Library.css';
import AddBook from './AddBook';
import Books from './Books';
import History from './History'

class Library extends Component {
    state = {
        // object  id(auto incremented) , name , numPages ,isNew
        listBooks: [] , 
        lastBookId: 0 ,// This should always be incremented , its unique
        //object  id (of book) , datetime , type ( class OperationType) , name , numPages ,isNew
        listOperations : []
     };


    render() {

    const handleOperationTypeChange = (id ,datetime , type,  name , numPages ,isNew) =>{
        let newListOperations = [...this.state.listOperations];
        let obj = { id:id , datetime:datetime , type:type , 
                    name:name , numPages : numPages , isNew : isNew};
        // -- put at head so i will see it
        newListOperations.unshift(obj);
        this.setState({listOperations : newListOperations});                            
    }   

    const saveClickHandler = (name , numPages ,isNew) => {
        let newListBook = [...this.state.listBooks];
        let newBookId = this.state.lastBookId+1;
        let newBook = {
            id : newBookId , 
            name : name , 
            numPages : numPages , 
            isNew : isNew};

        newListBook.push(newBook);  
        this.setState({listBooks : newListBook , lastBookId : newBookId});          
        }

    const deleteBook = (index) =>{
        let newListBook = [...this.state.listBooks];
        newListBook.splice(index, 1);
        this.setState({listBooks : newListBook});
    }    

    const toggleIsNew = (index) =>{
        let newListBook = [...this.state.listBooks];
        newListBook[index].isNew = !newListBook[index].isNew ;
        this.setState({listBooks : newListBook});
    }
        return (
        <div className='Library'>
            <h1>Library</h1>
            <AddBook saveClickHandler = {saveClickHandler}/>
            <Books 
                handleOperationTypeChange={handleOperationTypeChange}
                toggleIsNew = {toggleIsNew}
                deleteBook={deleteBook} 
                listBooks = {this.state.listBooks}/>
            <History listOperations={this.state.listOperations}/>
        </div>
        );
    }
}

export default Library;