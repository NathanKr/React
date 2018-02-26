import React, { Component } from 'react';
import './App.css';
import ChildWithPropValidation from './ChildWithPropValidation/ChildWithPropsValidation'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ChildWithPropValidation name="Nathan" age={43}/>
      </div>
    );
  }
}

export default App;
