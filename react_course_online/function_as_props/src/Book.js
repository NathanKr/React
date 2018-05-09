import React from 'react'

function Book(props)
{
    return(
    <div className='book'>
        <h2>{props.name}</h2>
        <p>{props.pages}</p>
        <input type='checkbox' onClick = {props.incrementBooks}/>
    </div>
    )
}

export default Book;