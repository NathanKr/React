import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
      let number = 6;

      return (
      <div className="App">
        <p>{(number % 2) ? 'odd' : 'even'}</p>
      </div>
    );
  }
}

export default App;
