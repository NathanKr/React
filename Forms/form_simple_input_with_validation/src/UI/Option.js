import React from 'react'
import PropTypes from 'prop-types'


function Option(props)
{
    return <option {...props.htmlAttributes}>{props.children}</option>
}

Option.propTypes = { 
    htmlAttributes : PropTypes.object,
    children : PropTypes.string
 }
 
export default Option; 