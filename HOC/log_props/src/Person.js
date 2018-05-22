import React from 'react';
import hocLogProps from './hocLogProps';

function Person(props){
    return(
     <div>
        <h2>{props.name}</h2>
        <p>{props.age}</p>
    </div>);
}

export default hocLogProps(Person);