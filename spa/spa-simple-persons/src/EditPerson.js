import React, { Component } from "react";
import { Redirect } from "react-router-dom";

// EditPerson should be class component and name \ age should be
// state if it affect the dom
// e.g. when you want to disable the button for validation
class EditPerson extends Component {
  state = { navigate: false };

  name = this.props.currentPerson ? this.props.currentPerson.name : undefined;
  age = this.props.currentPerson ? this.props.currentPerson.age : undefined;

  render() {
    if (this.state.navigate || !this.props.currentPerson) {
      return <Redirect to="/Persons" />;
    }

    return (
      <div>
        <h2>Edit Person</h2>
        Name :
        <input
          defaultValue={this.props.currentPerson.name}
          onChange={(evt) => {
            this.name = evt.target.value;
          }}
        ></input>
        Age :
        <input
          defaultValue={this.props.currentPerson.age}
          onChange={(evt) => {
            this.age = evt.target.value;
          }}
          type="number"
        ></input>
        <button
          onClick={() => {
            this.props.editPerson(this.name, this.age);
            this.setState({ navigate: true });
          }}
        >
          Edit
        </button>
      </div>
    );
  }
}

export default EditPerson;
