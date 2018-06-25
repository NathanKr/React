import React from 'react';

function Flat(props){
    return <div>
        <img alt='flat image' src={props.img} />
        <br/>
        <a href={props.url}>{props.name}</a>
        <p>{props.grade}</p>
        <p>{props.location}</p>
        <p>{props.description}</p>
        <hr/>
        <br/>
    </div>
}

export default Flat;