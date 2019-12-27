import React from "react";

// AddPerson should be class component and name \ age should be 
// state if it affect the dom 
// e.g. when you want to disable the button for validation
const AddPerson = props => {
  let name = "",
    age = 0;
  return (
    <div>
      Name : 
      <input
        onChange={evt => {
          name = evt.target.value;
        }}
      ></input>
      Age : 
      <input
        onChange={evt => {
          age = evt.target.value;
        }}
        type="number"
      ></input>
      <button onClick={()=> {
          props.addPerson(name,age);
      }}>Add</button>
    </div>
  );
};

export default AddPerson;
