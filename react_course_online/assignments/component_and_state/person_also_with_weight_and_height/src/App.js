import React, { Component } from 'react';
import './App.css';
import Person from './Person'

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Persons : </h1>
       <Person name='Nathan' age={33} weight = {82} height = {180} />
       <Person  weight = {72} height = {160} name = 'Jim' age={23}/>
      </div>
    );
  }
}

export default App;
