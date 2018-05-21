import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {movies : [{id :'id1' ,val :'King Kong'} ,
   {id : 'id2' ,val : 'Harry Potter'} ,
   {id : 'id3' , val : 'Godfather'} ]};
  render() {
    const elements = this.state.movies.map((movie,index) =>
     <p key={movie.id} onClick={() => {
      let tmpMovies = [...this.state.movies];
      tmpMovies.splice(index,1);
      this.setState({movies : tmpMovies});
     }}>{index + 1} : {movie.val}</p>)
    return (
      <div className="App">
        <h2>Favorite movies</h2>
        {elements}
      </div>
    );
  }
}

export default App;
