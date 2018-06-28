import React, { Component } from 'react';
import './Library.css';
import AddBook from './AddBook';
import Books from './Books';
import History from './History';
import Home from './Home';
import TopMenu from './TopMenu';
import { BrowserRouter , Switch, Route} from 'react-router-dom';
import OperationType from '../Logic/OperationType';
import Utils from '../Logic/Utils';
import EditBook from './EditBook';

class Library extends Component {
    state = {
        // object  id(auto incremented) , name , numPages ,isNew
        listBooks: [] , 
        lastBookId: 0 ,// This should always be incremented , its unique
        //object  id (of book) , datetime , type ( class OperationType) , name , numPages ,isNew
        listOperations : []
     };

     indexEditedBook = null;

     handleOperationTypeChange = (id ,datetime , type,  name , numPages ,isNew) =>{
        let newListOperations = [...this.state.listOperations];
        let obj = { id:id , datetime:datetime , type:type , 
                    name:name , numPages : numPages , isNew : isNew};
        // -- put at head so i will see it
        newListOperations.unshift(obj);
        this.setState({listOperations : newListOperations});                            
    } 

     componentDidUpdate(prevProps, prevState, snapshot)
     {
         let book = null;
         let operationType = null;

         if( this.state.listBooks.length > prevState.listBooks.length)
         {
            // book created
            operationType = OperationType.create();
            book = this.state.listBooks[this.state.listBooks.length-1];
        }
         else if( this.state.listBooks.length < prevState.listBooks.length)
         {
            // book deleted
            operationType = OperationType.delete();
            book = prevState.listBooks[prevState.listBooks.length-1];
         }

         if(operationType){
            Utils.write("book "+operationType);
            this.handleOperationTypeChange(
                book.id ,
                Utils.currentTime() ,
                operationType,
                book.name ,
                book.numPages ,
                book.isNew);   
         }
     }

    render() {


    const saveAddBookClickHandler = (name , numPages ,isNew) => {
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

    // --- invoked by Books
    const editBook = (bookIndex) =>{
        this.indexEditedBook = bookIndex;
    }
    
    // --- invoked by EditBook
    const getBookAfterEdit = () => {
        return this.state.listBooks[this.indexEditedBook];
    } 

    // --- invoked by EditBook
    const setBookAfterEdit = (name,numPages,isNew) =>{
        let newListBooks = [...this.state.listBooks];
        let book = newListBooks[this.indexEditedBook];
        book.name = name;
        book.numPages = numPages;
        book.isNew = isNew;
        this.setState({listBooks:newListBooks});
        
        const operationType = OperationType.edit();

        Utils.write("book "+operationType);
        this.handleOperationTypeChange(
            book.id ,
            Utils.currentTime() ,
            operationType,
            book.name ,
            book.numPages ,
            book.isNew);   

        this.indexEditedBook = null;
    }


    return (
        <BrowserRouter>
        <div className='Library'>
            <TopMenu/>
            <Switch>
            <Route exact path='/' component={Home} />

            <Route exact path='/AddBook'   
                   render={() => <AddBook 
                    saveClickHandler = {saveAddBookClickHandler}/>
                }  />

            <Route exact path='/EditBook' 
                    render = {() =>{
                        return <EditBook
                         getBookAfterEdit={getBookAfterEdit}
                         setBookAfterEdit={setBookAfterEdit}
                         />
                    }} />    

            <Route exact path='/Books'   
                   render= {() =>  <Books 
                    deleteBook={deleteBook} 
                    editBook = {editBook}
                    listBooks = {this.state.listBooks}/>
                    } />

            <Route exact path='/History' 
                   render={() => <History 
                    listOperations={this.state.listOperations}/>
                } />         
            </Switch>
        </div>
     </BrowserRouter>
        );
    }
}

export default Library;