import React from 'react';

function Validation(props)
{
    const style = {color : 'red' , fontWeight : 'bold' };
    return <p style={style} >{props.length > 4 ? 'Length is too long' : ''}</p>
}

export default Validation;