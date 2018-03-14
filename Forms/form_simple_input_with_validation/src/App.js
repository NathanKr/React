import React, { Component } from 'react';
import './App.css';
import Form from './UI/Form';
import InputLogic from './UI/InputLogic'

class App extends Component {
  state = {personName : "" , personPassword : ""};
  
  // ******** person name config
  htmlInputArgumentsPersonName = {
    type:"text" ,
    placeholder:"e.g. Nathan Krasney" , 
    defaultValue:this.state.personName};

    inputPersonNameChangeHandler = (personName) =>{
      this.setState({personName : personName});
    }
  
  
    personNameValidationErrorHandler = () =>{
      return this.state.personName ? '' : 'person name can not be empty';
    }
  

  // ******** person password config  
  htmlInputArgumentsPersonPassword = {
      type:"password" ,
      placeholder:"e.g. 149xCz" , 
      defaultValue:this.state.personPassword};

      inputPersonPasswordChangeHandler = (personPassword) =>{
        this.setState({personPassword : personPassword});
      }

      personPasswordValidationErrorHandler = () =>{
        return this.state.personPassword ? '' : 'person password can not be empty';
      }

  // submit button config      
  htmlInputArgumentsSubmit = {
        type:"submit" , 
        value:"Submit"};

  submitButtonValidationErrorHandler = () => { // --- no validation issue for button ...
    return '';
  }     
 
  handleSubmit = (event) => {
    event.preventDefault(); // added because we are not sending the page to the srver
    console.log("name : "+this.state.personName+" , password : "+this.state.personPassword);
  }

  isFormValid = () =>{
   return this.arInputLogic.every(item => !item.validationErrorHandler() );
  }

  arInputLogic = [new InputLogic( this.inputPersonNameChangeHandler,'Name',
                                  this.htmlInputArgumentsPersonName,this.personNameValidationErrorHandler),
                  new InputLogic( this.inputPersonPasswordChangeHandler,'Password',
                                  this.htmlInputArgumentsPersonPassword,this.personPasswordValidationErrorHandler),
                  new InputLogic(null,null,this.htmlInputArgumentsSubmit,this.submitButtonValidationErrorHandler)];

  render() {
    return (
      <div className="App">
        <Form arInputLogic={this.arInputLogic} isFormValid={this.isFormValid} handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;
