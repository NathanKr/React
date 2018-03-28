import React, { Component } from 'react';
import './App.css';
import IncrementDecrement from './Containers/IncrementDecrement/IncrementDecrement';

class App extends Component {
  state = {count : 0};

  setCount = (count) =>{
    this.setState({count:count});
  } 

  render() {
    return (
      <div className="App">
        <IncrementDecrement count={this.state.count} setCount= {this.setCount}/>
        <p>count : {this.state.count}</p>
      </div>
    );
  }
}



export default App;
