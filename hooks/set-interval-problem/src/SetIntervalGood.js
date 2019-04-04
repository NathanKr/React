import React, { useEffect, useState, useRef } from "react";

const SetIntervalGood = () => {
  const [counter, setCounter] = useState(0);
  const counterRef = useRef(); // --- get reference to counter because callback of setInterval is defined once

  //  useEffect is not need because this is not side effect     useEffect(() => {
    counterRef.current = counter;
 // }); //this function is invoked after every render

  useEffect(() => {
    // --- setInterval is called on the first render - on Mount
    const handle = setInterval(() => {
      setCounter(counterRef.current + 1);
      console.log("callback is called for SetIntervalGood");
    }, 1000);

    return () => clearInterval(handle); // clearInterval is called once on Unmount
  }, []); // this function is invoked once after the first render

  return (
    <div>
      <p>{counter}</p>
    </div>
  );
};

export default SetIntervalGood;
