import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = { onButton: false, onMenu: false };

  render() {
    const shouldShow = () => {
      return this.state.onButton | this.state.onMenu;
    };
    console.log("opacity : ", shouldShow());
    const menu = (
      <ul
        style={{ opacity: shouldShow() ? 1 : 0, transition: "opacity 1s" }}
        onMouseEnter={() => {
          console.log("mouse enter menu");
          this.setState({ ...this.state, onMenu: true });
        }}
        onMouseLeave={() => {
          console.log("mouse leave menu");
          /* for some reason moving from button to menu does not cause onMouseLeave on button , 
          so i am fixing this by setting onButton: false */
          this.setState({ ...this.state, onMenu: false, onButton: false });
        }}
      >
        <li>
          <a href="/Home">Home</a>
        </li>
        <li>
          <a href="#news">News</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
      </ul>
    );

    return (
      <div>
        <h2>hover over the button to show the drop down menu</h2>
        <h2>move the mouse from the menu\button will hide the drop down menu</h2>
        <button style={{marginBottom:'10px'}}
          onMouseEnter={() => {
            console.log("mouse enter button");
            this.setState({ ...this.state, onButton: true });
          }}
          onMouseLeave={() => {
            console.log("mouse leave button");
            this.setState({ ...this.state, onButton: false });
          }}
        >
          Hover Me
        </button>
        {menu}
      </div>
    );
  }
}

export default App;
