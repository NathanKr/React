import React from "react";
import useInput from "./useInput";

const LoginWithCustomHook = () => {
  const isNameValid = name => name.length > 2;
  const isPasswordValid = password => password.length > 5;
  const styleError = { border: "1px solid red" };

  const nameInput = useInput(isNameValid);
  const passwordInput = useInput(isPasswordValid);

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log(
      `login : name - ${nameInput.value} , password - ${passwordInput.value}`
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="insert name"
          onChange={nameInput.changeHandler}
          style={!nameInput.isValid ? styleError : {}}
        />
        <br />

        <input
          type="password"
          placeholder="insert password"
          onChange={passwordInput.changeHandler}
          style={!passwordInput.isValid ? styleError : {}}
        />
        <br />

        <input
          disabled={!(nameInput.isValid && passwordInput.isValid)}
          type="submit"
          value="Login"
        />
      </form>
    </div>
  );
};

export default LoginWithCustomHook;
