import React from 'react'
import './style.css'

export default function CurrentBook(props){
    if(!props.book.name){
        return <p className='CurrentBook'>Click on book to get full info</p>
    }

    return <div className='CurrentBook'>
        <p>{props.book.name}</p>
        <p>{props.book.description}</p>
        <p>{props.book.pagesNum}</p>
    </div>
}