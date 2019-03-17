import React, { useState } from "react";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log(`login : name - ${name} , password - ${password}`);
  };

  const isNameValid = () => name.length > 2;
  const isPasswordValid = () => password.length > 5;
  const styleError = { border: "1px solid red" };

  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="insert name"
          onChange={evt => setName(evt.target.value)}
          style={!isNameValid() ? styleError : {}}
        />
        <br />

        <input
          type="password"
          placeholder="insert password"
          onChange={evt => setPassword(evt.target.value)}
          style={!isPasswordValid() ? styleError : {}}
        />
        <br />

        <input
          disabled={!(isNameValid() && isPasswordValid())}
          type="submit"
          value="Login"
        />
      </form>
    </div>
  );
};

export default Login;
