import React from 'react'

function CharComponent(props)
{
    return <span onClick = {props.clickHandler}>{props.char}</span>
}

export default CharComponent;