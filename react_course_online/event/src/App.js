import React, { Component } from 'react';
import './App.css';

class App extends Component {
  clickHandler = () => {
    console.log('i was clicked');
  }

  render() {
    return (
      <div className="App">
       <h2>Event</h2>
       <button onClick={this.clickHandler} >ClickMe</button>
      </div>
    );
  }
}

export default App;
