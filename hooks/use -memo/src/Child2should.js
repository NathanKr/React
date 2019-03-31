import React, { Component } from "react";

class Child2should extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.b !== this.props.b;
  }

  render() {
    console.log("child2 render");
    return <div>child 2 b : {this.props.b}</div>;
  }
}

export default Child2should;
