import React, { useState } from "react";

const Login = () => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log(`login : name - ${name} , password - ${password}`);
  };

  /* --- true if length >= 5
   --- why do i need it as custom hook ? */
  const useIsPasswordValid = () => {
    return password && password.length >= 5;
  };

    const stylePassword = {
    backgroundColor: useIsPasswordValid() ? "white" : "red"
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="insert name"
          onChange={evt => setName(evt.target.value)}
        />
        <br />

        <input
          type="password"
          placeholder="insert password"
          onChange={evt => setPassword(evt.target.value)}
          style={stylePassword}
        />
        <br />

        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
