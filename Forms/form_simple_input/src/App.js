import React, { Component } from 'react';
import './App.css';
import Input from './Input'

class App extends Component {
  state = {personName : "" , personPassword : ""};
  
  // --- here you put the html properties of input
  htmlInputArgumentsPersonName = {
    type:"text" ,
    placeholder:"e.g. Nathan Krasney" , 
    defaultValue:this.state.personName};

  htmlInputArgumentsPersonPassword = {
      type:"password" ,
      placeholder:"e.g. 149xCz" , 
      defaultValue:this.state.personPassword};

  htmlInputArgumentsSubmit = {
        type:"submit" , 
        value:"Submit"};

  inputPersonNameChangeHandler = (personName) =>{
    this.setState({personName : personName});
  }

  inputPersonPasswordChangeHandler = (personPassword) =>{
    this.setState({personPassword : personPassword});
  }

  handleSubmit = (event) => {
    event.preventDefault(); // added because we are not sending the page to the srver
    console.log("name : "+this.state.personName+" , password : "+this.state.personPassword);
  }


  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <Input inputChangeHandler = {this.inputPersonNameChangeHandler} labelText="Name"
                 htmlInputArguments = {this.htmlInputArgumentsPersonName}/>
          
          <Input inputChangeHandler = {this.inputPersonPasswordChangeHandler} labelText="Password"
                 htmlInputArguments = {this.htmlInputArgumentsPersonPassword}/>    

          <Input htmlInputArguments = {this.htmlInputArgumentsSubmit} />                              
        </form>
      </div>
    );
  }
}

export default App;
