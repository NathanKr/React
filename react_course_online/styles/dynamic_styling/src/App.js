import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {isBlue : true};
  render() {
    
    const blueStyle = {color : 'blue'};
    const redStyle = {color : 'red'};
    const clickHandler = () => {
      const newIsBlue = !this.state.isBlue;
      this.setState ({isBlue : newIsBlue});
    }
    return (
      <div className="App">
        <button onClick={clickHandler}
               style = {this.state.isBlue ?
                         blueStyle :
                         redStyle}>ClickMe</button>
      </div>
    );
  }
}

export default App;
