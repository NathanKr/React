import React, { Component } from 'react'; 
import './App.css';

class App extends Component {
  // --- create ref using React.createRef()
  myRef = React.createRef();
  style = {width:'200px', height:'100px' , backgroundColor:'red'};
 
  componentDidMount(){
    // --- access ref using current
    console.log("width : " ,this.myRef.current.style.width);
  }

 render() {
   return (
     <div className="App">
        <h3>Check red rectangle width in console using ref</h3>
        {/* assign ref to DOM element using ref */}
        <div  style={this.style} ref={this.myRef}></div>
     </div>
   );
  }
}

export default App;




