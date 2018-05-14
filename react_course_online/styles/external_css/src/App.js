import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Book from './Book'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Book name='Bible' pages='1234'/>
        <Book name='Harry Potter' pages='234'/>
      </div>
    );
  }
}

export default App;
