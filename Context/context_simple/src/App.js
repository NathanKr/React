import React, { Component } from 'react';
import './App.css';
import  Child from './Child';
import {LangContext} from './LangContext';


class App extends Component {
  lang = 'he';
  render() {
    return (
        <div className="App">
          <h1>App component : provides language as context - {this.lang}</h1>
          <h3>Language may be used in few components so it's convient to use as context</h3>
          {/* seems mandatory to use value (and ONLY value) as props */}
          <LangContext.Provider value={this.lang}>
            <Child msg="message from App">children from App</Child>
          </LangContext.Provider>
        </div>
    );
  }
}

export default App;
