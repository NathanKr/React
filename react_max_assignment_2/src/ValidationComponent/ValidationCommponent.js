import React from 'react'

function ValidationComponent(props)
{
    const style = {color : 'red'};
    const content = (props.length > 4) ? 'lendth is too long' : '';
    return <p style={style} >{content}</p>
}

export default ValidationComponent;