import React, { useEffect, useState } from "react";

const SetIntervalBad = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const handle = setInterval(() => {
      setCounter(counter + 1);
      console.log("callback is called for SetIntervalBad");
    }, 1000);

    return () => clearInterval(handle); // clearInterval is called once on Unmount
  }, []); // this function is invoked once after the first render

  return (
    <div>
      <p>{counter}</p>
    </div>
  );
};

export default SetIntervalBad;
