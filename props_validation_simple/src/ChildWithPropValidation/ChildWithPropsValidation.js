import React from 'react';
import PropTypes from 'prop-types'

function ChildWithPropValidation(props)
{
    return(
        <div>
            <p>name : {props.name}</p>
            <p>age : {props.age}</p>
        </div>            
    )
}

ChildWithPropValidation.propTypes = {
    name : PropTypes.string,
    age : PropTypes.number
}

export default ChildWithPropValidation;
