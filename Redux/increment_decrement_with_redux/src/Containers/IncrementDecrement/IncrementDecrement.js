import React, { Component } from 'react';


class IncrementDecrement extends Component {
  state = {count : 0};

  render() {
    return (
        <div>
            <button onClick={() =>{
              this.setState({count:(this.state.count+1)});
            }}>Increment by 1</button>
            <button onClick={() =>{
              this.setState({count:(this.state.count-1)});
            }}>Decrement by 1</button>
            <button onClick={() =>{
              this.setState({count:(this.state.count+10)});
            }}>Fast Increment</button>
            <button onClick={() =>{
              this.setState({count:(this.state.count-10)});
            }}>Fast Decrement</button>
            <p>count : {this.state.count}</p>
        </div>
    );
  }
}


export default IncrementDecrement;
