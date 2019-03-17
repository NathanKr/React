import React, { Component } from 'react';
import './App.css';
import Login from './Login'
import LoginWithCustomHook from './LoginWithCustomHook';

class App extends Component {
  handleSubmit = () =>{}
  render() {
    return (
      <div className="App">
        <Login/>
        <LoginWithCustomHook/>
      </div>
    );
  }
}

export default App;
