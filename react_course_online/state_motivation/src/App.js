import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {msg : 'hello'};
  clickHandler = () => {
    if(this.state.msg == 'hello'){
      this.setState({msg : 'world'}); 
    }
    else{
      this.setState({msg : 'hello'})
    }
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.msg}</h1>
        <button onClick={this.clickHandler}>ClickMe</button>
      </div>
    );
  }
}

export default App;
