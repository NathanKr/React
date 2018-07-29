import React, { Component } from 'react';
import './App.css';
import IncrementDecrement from './IncrementDecrement';

class App extends Component {
  state = {count : 0};

  setCount = (count) =>{
    this.setState({count:count});
  } 

  render() {
    return (
      <div className="App">
        <h1>Increment \ Decrement without Redux</h1>
        <IncrementDecrement count={this.state.count} setCount= {this.setCount}/>
      </div>
    );
  }
}



export default App;
