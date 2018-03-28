import React, { Component } from 'react';


class IncrementDecrement extends Component {
  state = {count : 0};

  render() {
    return (
        <div>
            <button onClick={() =>{
              this.setState({count:(this.state.count+1)});
            }}>Increment</button>
            <button onClick={() =>{
              this.setState({count:(this.state.count-1)});
            }}>Decrement</button>
            <p>count : {this.state.count}</p>
        </div>
    );
  }
}


export default IncrementDecrement;
