import React from 'react';
import './Flat.css';

function Flat(props){
    return <div className='Flat'>
        <img alt='flat' src={props.img} />
        <div className='Right'>
            <a href={props.url}>{props.name}</a>
            <p>{props.location}</p>
            <p>{props.description}</p>
            <p className='Grade'>{props.grade}</p>
        </div>
    </div>
}

export default Flat;