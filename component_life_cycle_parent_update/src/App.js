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
 
  buttonClickHandler = () => {
    const newText = this.state.text === 'text1' ? 'text2' : 'text1';
    this.setState({text : newText});
  }
render() {
   console.log('App.js render');
   return (<div className="App">
       <h1>React life cycle for create and update</h1>
       <h3>check life cycle methods in console.log</h3>
       <button onClick={this.buttonClickHandler}>Click to change state and cause update</button>
       <br/>
       <Child text={this.state.text}/>
     </div>);}

 componentDidMount(){ 
   console.log('App.js componentDidMount');
  }

  componentWillReceiveProps(nextProps)
  {
      console.log('UPDATE App.js componentWillReciveProps . nextProps : ');
      console.log(nextProps);
  }

  shouldComponentUpdate(nextProps,nextState)
  {
      console.log('UPDATE App.js shouldComponentUpdate return true' +
                  '\nnextProps : ' + JSON.stringify(nextProps) + 
                  '\nnext state : ' + JSON.stringify(nextState) );
      return true;
  }

  componentWillUpdate(nextProps,nextState)
  {
      console.log('UPDATE App.js componentWillUpdate' +
      '\nnextProps : ' + JSON.stringify(nextProps) + 
      '\nnext state : ' + JSON.stringify(nextState) );
  }


  componentDidUpdate(){
        console.log('UPDATE App.js componentDidUpdate');
    }
}
export default App;


