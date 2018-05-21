import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {flag : true};
  clickHandler = () =>{
    this.setState({flag : !this.state.flag});
  }
  render() {
    return (
      <div className="App">
       <button 
               onClick={this.clickHandler}>Click</button>
       <h2 className={this.state.flag ? 'style1' : 'style2'}>Dynamic Styling</h2>
      </div>
    );
  }
}

export default App;
