import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import Persons from "./Persons";
import AddPerson from "./AddPerson";
import EditPerson from "./EditPerson";

class App extends Component {
  state = {
    persons: [
      { name: "Nathan", age: 56 },
      { name: "Yael", age: 26 }
    ]
  };

  currentPersonIndex = null;

  personClickHandler = index => {
    this.currentPersonIndex = index;
  };

  editPerson = (name, age) => {
    let tmpPersons = [...this.state.persons];
    tmpPersons[this.currentPersonIndex].name = name;
    tmpPersons[this.currentPersonIndex].age = age;
    this.setState({ persons: tmpPersons });
    this.currentPersonIndex = null;
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
              render={() => (
                <Persons
                  personClickHandler={this.personClickHandler}
                  persons={this.state.persons}
                />
              )}
            />
            <Route
              exact
              path="/AddPerson"
              render={() => <AddPerson addPerson={this.addPerson} />}
            />
            <Route
              exact
              path="/EditPerson"
              render={() => <EditPerson editPerson={this.editPerson} />}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
