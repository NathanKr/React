import React from "react";

const Persons = props => {
  const elements = props.persons.map((person,index) => (
    <p key={index}>
      {person.name},{person.age}
    </p>
  ));
  return <div>{elements}</div>;
};

export default Persons;
