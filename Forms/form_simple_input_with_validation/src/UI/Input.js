import React from 'react'
import PropTypes from 'prop-types'
import InputType from './InputType'
import Option from './Option'

function Input(props){
    const styleDiv = {padding : '15px'};
    const styleLabel = {display:'block' , fontWeight:'bold' , marginBottom:'8px'};
    const styleInput = {width:'100%' , outline:'none' , boxSizing: 'border-box' , padding:'5px'};
    const styleValidationError = {color:'red'};
    const error = props.validationErrorHandler();
    var errorElement = error ? <p style={styleValidationError}>{error}</p> : '';
    var htmlInputAttributesFixed =  (props.htmlInputAttributes.type !== 'submit') ?
                                     {...props.htmlInputAttributes } :
                                     {...props.htmlInputAttributes , ...{disabled : !props.isFormValid()} };

    var inputElement = null;

    switch(props.inputType){
        case InputType.getPureInput() :
        inputElement = <  input onChange= {(evt) =>{
                                const value = htmlInputAttributesFixed.type !== 'checkbox' ?
                                        evt.target.value :
                                        evt.target.checked;
                                props.inputChangeHandler(value);
                                }} style={styleInput } {...htmlInputAttributesFixed} />;
        break;

        case InputType.getTextarea():
        inputElement = <  textarea onChange= {(evt) =>{
                            props.inputChangeHandler(evt.target.value);
                            }} style={styleInput } {...htmlInputAttributesFixed} />;                            
        break;

        case InputType.getSelect():
        inputElement =  <select  onChange= {(evt) =>{
                        props.inputChangeHandler(evt.target.value);
                        }} style={styleInput } {...htmlInputAttributesFixed}>
                            {props.content.map((item,index) => {
                                return <Option key={index} htmlAttributes={item.htmlAttributes}>{item.innerHTML}</Option>  
                            })}
                        </select>                              
        break;


        default:
        inputElement = null;                          
    }

    return(
        <div style={styleDiv}>
            <label style={styleLabel}>{props.labelText}</label>
            {inputElement}
            {errorElement}
        </div>
    )
}

export default Input;   

Input.propTypes = { 
    inputType : PropTypes.string, // InputType.getPureInput() ,  InputType.getTextarea() , InputType.getSelect()
    labelText : PropTypes.string,
    htmlInputAttributes : PropTypes.object,
    inputChangeHandler : PropTypes.func,
    validationErrorHandler : PropTypes.func,
    isFormValid : PropTypes.func,
    /* -- content : info which is used to define innerHTML but format depend on InputType ,
       -- currently it is needed for select
    */
    content : PropTypes.any 
 }
 