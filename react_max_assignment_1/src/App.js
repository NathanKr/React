import React, { Component } from 'react';
import UserInput from './UserInput/UserInput'
import {UserOutput} from './UserOutput/UserOutput'
import './App.css';



class App extends Component {
  state = {username : ''};
  updateUserName = (name) =>{
    this.setState({username : name});
  }
  
  render() {
    return (
      <div className="App">
        <h1>App Component</h1>
        <UserInput changeHandler={this.updateUserName}/>
        <UserOutput name={this.state.username}/>
      </div>
    );
  }
}

export default App;
