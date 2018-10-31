import React, { Component } from "react";
import "./App.css";

class App extends Component {
  buttonRef = React.createRef();
  buttonRect;

  onWindowResize = () => {
   this.setRect();
  }
  setRect = () => {
    this.buttonRect = this.buttonRef.current.getBoundingClientRect();
  };

  leaveSide = (elementBoundingRect, leaveX, leaveY) => {
    let side;

    if (leaveX <= elementBoundingRect.left) {
      side = "left";
    } else if (
      leaveX >=
      elementBoundingRect.left + elementBoundingRect.width
    ) {
      side = "right";
    } else if (leaveY <= elementBoundingRect.top) {
      side = "top";
    } else {
      side = "bottom";
    }

    return side;
  };

  componentDidMount() {
    this.setRect();
    console.log(
      `componentDidMount \nbuttonRect.x : ${this.buttonRect.x} , buttonRect.y : ${this.buttonRect.y}`
    );
    window.addEventListener("resize", this.onWindowResize);
  }

  render() {
    return (
      <div className="App">
        <h2>enter the button and leave to see on console the leave side. It is working only when window resize i.e. responsive</h2>
        <button
          ref={this.buttonRef}
          onMouseLeave={e => {
            console.log(
              `clientX : ${e.nativeEvent.clientX}, clientY : ${
                e.nativeEvent.clientY
              }`
            );
            console.log(
              this.leaveSide(
                this.buttonRect,
                e.nativeEvent.clientX,
                e.nativeEvent.clientY
              )
            );
          }}
        >
          click
        </button>
      </div>
    );
  }
}

export default App;
