import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    // --- each object has name , completed
    vacations: [],
    mode: "All"
  };
  currentVacation = "";

  shouldShowVacation = vacationCompleted => {
    let shouldShow = false;

    switch (this.state.mode) {
      case "All":
        shouldShow = true;
        break;

      case "Active":
        shouldShow = !vacationCompleted;
        break;

      case "Completed":
        shouldShow = vacationCompleted;
        break;

      default:
        shouldShow = false;
    }

    return shouldShow;
  };

  render() {
    const vacationsElements = this.state.vacations.map((vacation, index) =>
      this.shouldShowVacation(vacation.completed) ? (
        <li
          onClick={() => {
            let tmpVacations = [...this.state.vacations];
            tmpVacations[index].completed = true;
            this.setState({ vacations: tmpVacations });
          }}
          style={{ textDecoration: vacation.completed ? "line-through" : "" }}
          key={index}
        >
          {vacation.name}
        </li>
      ) : (
        ""
      )
    );

    return (
      <div className="App">
        <h2>Vacations Wish List</h2>
        <input
          onChange={event => {
            this.currentVacation = event.target.value;
          }}
        ></input>
        <button
          onClick={() => {
            let tmpVacatations = [...this.state.vacations];
            tmpVacatations.push({
              name: this.currentVacation,
              completed: false
            });
            this.setState({ vacations: tmpVacatations });
          }}
        >
          Add Vacation
        </button>
        <ol>{vacationsElements}</ol>
        <button
          disabled={this.state.mode === "All"}
          onClick={() => {
            this.setState({ mode: "All" });
          }}
        >
          All
        </button>
        <button
          disabled={this.state.mode === "Active"}
          onClick={() => {
            this.setState({ mode: "Active" });
          }}
        >
          Active
        </button>
        <button
          disabled={this.state.mode === "Completed"}
          onClick={() => {
            this.setState({ mode: "Completed" });
          }}
        >
          Completed
        </button>
      </div>
    );
  }
}

export default App;
