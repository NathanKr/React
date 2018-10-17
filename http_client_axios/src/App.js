import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  url = "https://jsonplaceholder.typicode.com/posts1";
  state = { data: [], selectedId: null };

  componentDidMount() {
    axios
      .get(this.url)
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <h3>click on id to get post info using component</h3>
        {this.state.data.map(item => {
          return (
            <div>
              <p
                onClick={() => {
                  this.setState({ selectedId: item.id });
                }}
                key={item.id}
              >
                {item.id}{" "}
              </p>
              {this.state.selectedId === item.id ? <p>{item.title}</p> : ""}
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
