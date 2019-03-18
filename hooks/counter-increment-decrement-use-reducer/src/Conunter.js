import React, { useReducer } from "react";
import counterReducer from "./counterReducer";

const Counter = ({ initialState }) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
};

export default Counter;
