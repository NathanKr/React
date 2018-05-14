import React from 'react';
import './Book.css'

function Book(props){
    return (
        <div className='book'>
            <h2>{props.name}</h2>
            <p>{props.pages}</p>
        </div>
    );
}

export default Book;