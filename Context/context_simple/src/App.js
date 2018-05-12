import React, { Component } from 'react';
import './App.css';
import  Child from './Child';
import {UserContext} from './UserContext';


class App extends Component {
  user = {name:'Nathan Krasney' , email : 'natankrasney@gmail.com'};
  render() {
    return (
        <div className="App">
          <h2>App component - Provider : provides user as context - {this.user.email}</h2>
          <h3>User may be used in few components so it's convient to use as context</h3>
          {/* seems mandatory to use value (and ONLY value) as props */}
          <UserContext.Provider value={this.user}>
            <Child msg="message from App">children from App</Child>
          </UserContext.Provider>
        </div>
    );
  }
}

export default App;
