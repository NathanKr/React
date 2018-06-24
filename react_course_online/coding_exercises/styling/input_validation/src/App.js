import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './Validation';
import Input from './Input';


class App extends Component {
  state = {text : ''};
  
  render() {
    const changeHandler = (evt) => {
      this.setState({text : evt.target.value});
    }

    return (
      <div className="App">
        <h2>Enter some input. see what happen if length > 4</h2>
        <Input value={this.state.text} onChange = {changeHandler}/>
        <ValidationComponent  length={this.state.text.length}/>
      </div>
    );
  }
}

export default App;
