import React, { Component } from "react";
import "./App.css";

class App extends Component {
  // --- vacation :  name , completed (id is not used here for simplicity)

  state = {
    mode: "All", // All or Completed or Active
    vacations: []
  };
  currentVacation = "";

  addVacation = () => {
    let tmpVacations = [...this.state.vacations];
    tmpVacations.push({ name: this.currentVacation, completed: false });
    this.setState({ vacations: tmpVacations });
  };

  shouldShowVacation = index => {
    let shouldShow;

    switch (this.state.mode) {
      case "All":
        shouldShow = true;
        break;

      case "Active":
        shouldShow = !this.state.vacations[index].completed;
        break;

      case "Completed":
        shouldShow = this.state.vacations[index].completed;
        break;

      default:
        break;
    }

    return shouldShow;
  };

  render() {
    const elements = this.state.vacations.map((it, index) =>
      this.shouldShowVacation(index) ? (
        <li
          onClick={() => {
            let tmpVacations = [...this.state.vacations];
            tmpVacations[index].completed = true;
            this.setState({ vacations: tmpVacations });
          }}
          key={index}
          style={{ textDecoration: it.completed ? "line-through" : "" }}
        >
          {it.name}
        </li>
      ) : (
        ""
      )
    );

    const filterButtons = (
      <div>
        {/* an be done in a compact way using array and map ?? */}
        <button
          disabled={this.state.mode === "All"}
          onClick={() => this.setState({ mode: "All" })}
        >
          All
        </button>
        <button
          disabled={this.state.mode === "Active"}
          onClick={() => this.setState({ mode: "Active" })}
        >
          Active
        </button>
        <button
          disabled={this.state.mode === "Completed"}
          onClick={() => this.setState({ mode: "Completed" })}
        >
          Completed
        </button>
      </div>
    );

    return (
      <div className="App">
        <input
          onChange={event => {
            this.currentVacation = event.target.value;
          }}
        ></input>
        <button onClick={this.addVacation}>Add Vacation</button>
        <ol>{elements}</ol>
        {filterButtons}
      </div>
    );
  }
}

export default App;
