import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import Persons from "./Persons";
import AddPerson from "./AddPerson";

class App extends Component {
  state = {
    persons: [
      { name: "Nathan", age: 56 },
      { name: "Yael", age: 26 }
    ]
  };

  addPerson = (name, age) => {
    let tmpPersons = [...this.state.persons];
    // -- following is possible when key and value is same 
    tmpPersons.push({ name, age });
    this.setState({ persons: tmpPersons });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Link to="/">Home</Link>
          <Link to="/Persons">Persons</Link>
          <Link to="/AddPerson">AddPerson</Link>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/Persons"
              render={() => <Persons persons={this.state.persons} />}
            />
            <Route
              exact
              path="/AddPerson"
              render={() => <AddPerson addPerson={this.addPerson} />}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
