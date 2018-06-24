import React, { Component } from 'react';
import './App.css';
import VacationList from './Containers/VacationList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <VacationList/>
      </div>
    );
  }
}

export default App;
