import React, { Component } from "react";
import "./App.css";
import Posts from "./Posts";

class App extends Component {
  state = { url: "https://jsonplaceholder.typicode.com/posts" };
  tmpUrl = "https://jsonplaceholder.typicode.com/posts";

  render() {
    return (
      <div className="App">
        <button
          onClick={() => {
            this.setState({ url: this.tmpUrl });
          }}
        >
          Set URL
        </button>
        <input defaultValue={this.state.url}
          onChange={evt => (this.tmpUrl = evt.target.value)}
        ></input>
        <Posts url={this.state.url} />
      </div>
    );
  }
}

export default App;
