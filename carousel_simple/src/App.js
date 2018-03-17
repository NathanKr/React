import React, { Component } from 'react';
import './App.css';
import CarouselItemLogic from './Components/CarouselItemLogic'
import Carousel from './Containers/Carousel'

class App extends Component {
  styleDiv = {width:'600px', height:'400px'};
 arCarouselItemLogic = [ new CarouselItemLogic('images/blue-84621_1280.jpg','one surfer',{}) ,
                          new CarouselItemLogic('images/kitesurfer-960948_1280.jpg','few kites',{})];
  render() {
    return (
      // make sure images are under public directory
      <div style={this.styleDiv} className="App" >
        <Carousel arCarouselItemLogic = {this.arCarouselItemLogic}/>
      </div>
    );
  }
}

export default App;
