import React from 'react';


function Child1(props)
{
    console.log(props);
    return (
        <div>
            <h2>Child1</h2>
            <p>{props.match.params.number}</p>
        </div>
    );
}

export default Child1;