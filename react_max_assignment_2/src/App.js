import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationCommponent'
import CharComponent from './CharComponent/CharComponent'


class App extends Component {
  state = {text : ' '};

  charComponentClickHandler(_index){
    const oldText = this.state.text;
    const newText =   oldText.slice(0, _index) + 
                          oldText.slice(_index+1, oldText.length);
    this.setState({text : newText});  
  }
  
  render() {
    const arChars = this.state.text.split('');
    const charsElem = arChars.map((c,index) => (
      <CharComponent clickHandler = {() => {this.charComponentClickHandler(index)}}
       char = {c} index = {index} />
    ));
    return (
      <div className="App">
        <h2>Enter some input. see what happen if length > 4</h2>
        <input value={this.state.text} onChange = {(evt) =>{
          this.setState({text : evt.target.value});
        }}/>
        <ValidationComponent  length={this.state.text.length}/>
        <span>click on char to remove it : </span>{charsElem}
      </div>
    );
  }
}

export default App;
