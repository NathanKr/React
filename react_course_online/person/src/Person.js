import React from 'react';

function Person(props)
{
    return (<div>
        <h1>{props.name}</h1>
        <p>My Age : {props.age}</p>
    </div>);
}

export default Person;