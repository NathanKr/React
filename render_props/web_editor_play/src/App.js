import React, { Component } from "react";
import Editor from "./Editor";
import Page1 from "./Page1";
import Page2 from "./Page2";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";

class App extends Component {
  state = { func: Page1 };

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="App">
            <Link to={"/"}>Page1</Link>
            <Link to={"/Page2"}>Page2</Link>
            <hr />
            <Switch>
              <Route
                exact
                path="/"
                render={() => {
                  return <Editor subject={Page1} />;
                }}
              />
              <Route
                exact
                path="/Page2"
                render={() => {
                  return <Editor subject={Page2} />;
                }}
              />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
