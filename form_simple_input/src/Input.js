import React from 'react'
import PropTypes from 'prop-types'

function Input(props){
    const styleDiv = {padding : '15px'};
    const styleLabel = {display:'block' , fontWeight:'bold' , marginBottom:'8px'};
    const styleInput = {width:'100%' , outline:'none' , boxSizing: 'border-box' , padding:'5px'};

    return(
        <div style={styleDiv}>
            <label style={styleLabel}>{props.labelText}</label>
            <input onChange= {(evt) =>{
                    props.inputChangeHandler(evt.target.value);
            }} style={styleInput } {...props.htmlInputArguments} />
        </div>
    )
}

export default Input;   

Input.propTypes = { 
    labelText : PropTypes.string,
    htmlInputArgumentse : PropTypes.object,
    inputChangeHandler : PropTypes.func
 }
 