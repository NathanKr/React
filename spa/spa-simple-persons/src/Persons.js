import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Persons extends Component {
  state = { navigate: false };

  render() {
    if (this.state.navigate) {
      return <Redirect to="/EditPerson" />;
    }

    const elements = this.props.persons.map((person, index) => (
      <p
        onClick={() => {
          this.props.personClickHandler(index);
          this.setState({ navigate: true });
        }}
        key={index}
      >
        {person.name},{person.age}
      </p>
    ));

    return (
      <div>
        <h2>Persons</h2>
        {elements}
      </div>
    );
  }
}

export default Persons;
