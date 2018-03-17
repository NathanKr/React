import React, { Component } from 'react';
import './App.css';
import PersonForm from './Containers/PersonForm'

class App extends Component {

  render() {
    return (
        // --- basically no matter which form is need it can be done using Form and these 3 props : 
        // --- arInputLogic , isFormValid , handleSubmit
        // --- while state is used inside it
        <div className="App">
        <PersonForm />
      </div>
    );
  }
}

export default App;
