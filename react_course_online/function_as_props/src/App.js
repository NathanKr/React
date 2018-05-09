import React, { Component } from 'react';
import Book from './Book'

import './App.css';

class App extends Component {
  state = {bookOrdered:0};

  incrementBooks = () =>{
    const newOrders = this.state.bookOrdered + 1;
    this.setState({bookOrdered : newOrders});
  }


  render() {
    return (
      <div className="App">
        <h2>Books orderd : {this.state.bookOrdered}</h2>
        <Book name='Bible' pages={1234} 
        incrementBooks={this.incrementBooks} />
        <Book name='Harry Poter' pages={234} 
        incrementBooks={this.incrementBooks} />
      </div>
    );
  }
}

export default App;
