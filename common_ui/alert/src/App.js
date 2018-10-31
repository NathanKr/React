import React, { Component } from "react";
import Alert from "./Alert/Alert";
import "./App.css";

class App extends Component {
  state = { showAlert: true };
  btnClickHandler = () => {
    const newShowAlert = !this.state.showAlert;
    this.setState({ showAlert: newShowAlert });
  };

  hideHandler = () => {
    this.setState({ showAlert: false });
  };

  render() {
    return (
      <div className="App">
        <p>click 'Toggle Alert' to show \ hide message box</p>
        <p>click on message box 'Ok' to hide message box</p>
        <button onClick={this.btnClickHandler}>Toggle Alert</button>
        <Alert
          status={Alert.getSuccess()}
          hideHandler={this.hideHandler}
          show={this.state.showAlert}
        >
          this is some message !!!!!!!!!!!!
        </Alert>
      </div>
    );
  }
}

export default App;
