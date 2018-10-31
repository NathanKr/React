import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    showMenu: false,
  };

  render() {
    const menu = (
      <ul
        style={{
          position: "absolute",
          opacity: this.state.showMenu ? 1 : 0,
          transition: "opacity 2s"
        }}
        onMouseLeave={() => {
          this.setState({
            ...this.state,
            showMenu: false,
          });
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
      <div className="App">
        {/*<h2>hover over the button to show the drop down menu</h2>
        <h2>
          move the mouse from the menu\button will hide the drop down menu
        </h2>*/}
        <button
          style={{ marginBottom: "10px" }}
          onMouseEnter={(info) => {
            console.log(info);
            this.setState({
              ...this.state,
              showMenu: true,
            });
          }}
          onMouseLeave={() => {
            this.setState({ ...this.state, showMenu: false });
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
