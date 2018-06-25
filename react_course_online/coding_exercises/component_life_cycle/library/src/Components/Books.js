import React from 'react';
import Book from './Book';

function Books(props){
    const bookStyle = {
        border : '1px solid black' , 
        margin : '10px' , padding : '10px' ,
        display : 'inline-block' , 
        backgroundColor: '#F2F2F2',
        width : '200px'}
    const elmBooks = 
        props.listBooks.map((book , index) => 
        <div style={bookStyle} key={book.id}><Book 
            handleOperationTypeChange = {props.handleOperationTypeChange}
            id = {book.id}
            name = {book.name}
            numPages = {book.numPages} 
            isNew = {book.isNew}/>
            <button onClick = {
                () => props.deleteBook(index)
            }>Delete</button>
            <button onClick = {
                 () => props.toggleIsNew(index)
            }>Toggle</button>
            </div>);

    return <div>
        <h3>Books</h3>
        <ul>
        {elmBooks}
        </ul>
    </div>;
}

export default Books;