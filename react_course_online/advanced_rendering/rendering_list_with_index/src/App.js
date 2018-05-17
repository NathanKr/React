import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const movies = ['King Kong' , 'Harry Potter' , 'Godfather'];
    const elements = movies.map((movie,index) =>
     <p onClick={() => {
       console.log(index);
     }}>{index + 1} : {movie}</p>)
    return (
      <div className="App">
        <h2>Favorite movies</h2>
        {elements}
      </div>
    );
  }
}

export default App;
