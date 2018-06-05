import React from 'react';


function Child2(props)
{
    console.log(props);
    
    const query = new URLSearchParams(props.location.search);

    return (
        <div>
            <h2>Child2</h2>
            <p>{query.get('arg1')}</p>
            <p>{query.get('arg2')}</p>
        </div>
    );
}

export default Child2;