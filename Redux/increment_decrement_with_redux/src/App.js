import React, { Component } from 'react';
import './App.css';
import IncrementDecrement from './Containers/IncrementDecrement/IncrementDecrement';

class App extends Component {
  render() {
    return (
      <div className="App">
        <IncrementDecrement />
      </div>
    );
  }
}

export default App;
