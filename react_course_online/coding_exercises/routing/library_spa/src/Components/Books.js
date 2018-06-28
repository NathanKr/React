import React , {Component} from 'react';
import Book from './Book';
import {Redirect} from 'react-router-dom';

class Books extends Component{
    state = {navigateToEdit:false};
    

     bookStyle = {
        border : '1px solid black' , 
        margin : '10px' , padding : '10px' ,
        display : 'inline-block' , 
        backgroundColor: '#F2F2F2',
        width : '200px'}


    render(){
        const elmBooks = 
            this.props.listBooks.map((book , index) => 
            <div style={this.bookStyle} key={book.id}><Book 
                id = {book.id}
                name = {book.name}
                numPages = {book.numPages} 
                isNew = {book.isNew}/>
                <button onClick = {() => this.props.deleteBook(index)}>
                        Delete</button>
                <button onClick = {() => {
                    this.props.editBook(index);
                    this.setState({navigateToEdit:true})
                }}>Edit</button>
                </div>);
    

        if(this.state.navigateToEdit){
            return <Redirect to='/EditBook' />;
        }

        return <div>
            <h1>Books</h1>
            <ul>
                {elmBooks}
            </ul>
        </div>;
    }
}

export default Books;