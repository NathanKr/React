import React from 'react'
import Input from './Input'
import PropTypes from 'prop-types'

function Form(props){

return (
    <form onSubmit={props.handleSubmit}>
        {props.arInputLogic.map( (itemInputLogic,index) => {
          return  <Input   
                    key={index} // index is used because form does not change after creation
                    inputType={itemInputLogic.inputType}
                    inputChangeHandler = {itemInputLogic.inputChangeHandler} 
                    labelText={itemInputLogic.labelText}
                    htmlInputAttributes = {itemInputLogic.htmlInputAttributes}
                    validationErrorHandler = {itemInputLogic.validationErrorHandler}
                    isFormValid = {props.isFormValid}
                    content = {itemInputLogic.content}
                    /> 
        })};
    </form>)
}


Form.propTypes = { 
    arInputLogic : PropTypes.array,
    isFormValid : PropTypes.func,
    handleSubmit : PropTypes.func
 }
 

export default Form;