import React, { Component } from 'react';
import './App.css';
import Child from './Child/Child'

class App extends Component {
  state = {text : 'text1'};
  
  constructor(props){
    super(props);    
    console.log('App.js constructor');
  }

  componentWillMount(){
    console.log('App.js componentWillMount');
  }

  h3Style = {color: 'red'};

  render() {
    console.log('App.js render');
    return (
      <div className="App">
        <h1>Create and Update Life Cycle</h1>
        <h3 style={this.h3Style}>check console to see function calls</h3>
        <button onClick ={ () => {
          let newText = this.state.text;
          newText = (newText === 'text1' ? 'text2' : 'text1');
          this.setState({text : newText});
        }}>Click to Change State</button>
        <Child text={this.state.text}/>
      </div>
    );
  }

  componentDidMount(){
    console.log('App.js componentDidMount');
  }
}

export default App;
