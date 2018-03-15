import React, { Component } from 'react';
import './App.css';
import Form from './UI/Form';
import InputLogic from './UI/InputLogic'
import InputType from './UI/InputType'
import OptionLogic from './UI/OptionLogic'

class App extends Component {
  // --- i have put it here because it is needed by state which is defined after it
  arOptionLogic = [ 
    new OptionLogic('Male',{value:"male"}) ,
    new OptionLogic('Female',{value:"female" }) ,
    new OptionLogic('Other',{value:"other"}) 
  ];


  state = { personName : "" , 
            personPassword : "" ,
            personBiography : "" , 
            personGender: this.arOptionLogic[0].htmlAttributes.value
          };


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

    // ******** person biography config  
    htmlInputArgumentsPersonBiography = {
      rows : 4,
      placeholder:"e.g. i was born" , 
      defaultValue:this.state.personBiography};

      inputPersonBiographyChangeHandler = (personBiography) =>{
        this.setState({personBiography : personBiography});
      }

      personBiographyValidationErrorHandler = () =>{
        return this.state.personBiography ? '' : 'person biography can not be empty';
      }

      // ******** person gender config  
     

      htmlInputArgumentsPersonGender = {
        defaultValue:this.state.personGender};

        inputPersonGenderChangeHandler = (personGender) =>{
          this.setState({personGender : personGender});
        }

        personGenderValidationErrorHandler = () =>{
          return '';//can not be error because it is select
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
    console.log(this.state);
  }

  isFormValid = () =>{
   return this.arInputLogic.every(item => !item.validationErrorHandler() );
  }

  // --- this defines the elements  of the form - each one is Input component
  arInputLogic = [new InputLogic( InputType.getPureInput() , this.inputPersonNameChangeHandler,'Name',
                                  this.htmlInputArgumentsPersonName,this.personNameValidationErrorHandler,null),
                  new InputLogic( InputType.getPureInput() , this.inputPersonPasswordChangeHandler,'Password',
                                  this.htmlInputArgumentsPersonPassword,this.personPasswordValidationErrorHandler,null),
                  new InputLogic( InputType.getTextarea() , this.inputPersonBiographyChangeHandler,'Biography',
                                  this.htmlInputArgumentsPersonBiography,this.personBiographyValidationErrorHandler,null),
                  new InputLogic( InputType.getSelect() , this.inputPersonGenderChangeHandler,'Gender',
                                  this.htmlInputArgumentsPersonGender,this.personGenderValidationErrorHandler,
                                  this.arOptionLogic),
                  new InputLogic( InputType.getPureInput() ,null,null,this.htmlInputArgumentsSubmit,
                                  this.submitButtonValidationErrorHandler,null)];
  render() {
    return (
      <div className="App">
        <Form arInputLogic={this.arInputLogic} isFormValid={this.isFormValid} handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;
