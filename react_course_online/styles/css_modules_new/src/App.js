import React, { Component } from 'react';
import './App.css';
import Child2 from './Child2';
import Child1 from './Child1';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Child2 />
        <Child1 />
      </div>
    );
  }
}

export default App;
