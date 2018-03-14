import React from 'react'
import PropTypes from 'prop-types'

function Input(props){
    const styleDiv = {padding : '15px'};
    const styleLabel = {display:'block' , fontWeight:'bold' , marginBottom:'8px'};
    const styleInput = {width:'100%' , outline:'none' , boxSizing: 'border-box' , padding:'5px'};
    const styleValidationError = {color:'red'};
    const error = props.validationErrorHandler();
    var errorElement = error ? <p style={styleValidationError}>{error}</p> : '';
    var htmlInputArgumentsFixed =  (props.htmlInputArguments.type !== 'submit') ?
                                     {...props.htmlInputArguments } :
                                     {...props.htmlInputArguments , ...{disabled : !props.isFormValid()} };

    return(
        
        <div style={styleDiv}>
            <label style={styleLabel}>{props.labelText}</label>
            <input onChange= {(evt) =>{
                    props.inputChangeHandler(evt.target.value);
            }} style={styleInput } {...htmlInputArgumentsFixed} />
            {errorElement}
        </div>
    )
}

export default Input;   

Input.propTypes = { 
    labelText : PropTypes.string,
    htmlInputArgumentse : PropTypes.object,
    inputChangeHandler : PropTypes.func,
    validationErrorHandler : PropTypes.func,
    isFormValid : PropTypes.func
 }
 