import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {isBlue : true};

  render() {
    const blueStyle = {color : 'blue'};
    const redStyle = {color : 'red'};
    const clickHandler = () =>{
      this.setState({isBlue : !this.state.isBlue});
    }
    return (
      <div className="App">
        <button style={this.state.isBlue ? blueStyle : redStyle} 
                onClick={clickHandler}>ClickMe</button>
      </div>
    );
  }
}

export default App;
