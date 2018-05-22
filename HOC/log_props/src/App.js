import React, { Component } from 'react';
import './App.css';
import Person from './Person';


class App extends Component {
  render() {
    
    return (
      <div className="App">
        <Person name='Nathan Krasney' age={55}/>
      </div>
    );
  }
}

export default App;
