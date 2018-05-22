import React, { Component } from 'react';
import './App.css';
import Person from './Person';


class App extends Component {
  render() {
    
    return (
      <div className="App">
        <h4>Look for logged props in console</h4>
        <Person name='Nathan Krasney' age={55}/>
      </div>
    );
  }
}

export default App;
