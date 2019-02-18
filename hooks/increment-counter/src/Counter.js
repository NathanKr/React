import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    document.title = `cnt : ${count1} , ${count2}`;
    return () => console.log("clean up");// -- it is not must to return
  });

  return (
    <div>
      <h2>app title changes on counter change</h2>
      <button onClick={() => setCount1(count1 + 1)}>Increment</button>
      <p>counter1 : {count1}</p>
      <button onClick={() => setCount2(count2 + 1)}>Increment</button>
      <p>counter2 : {count2}</p>
    </div>
  );
};

export default Counter;
