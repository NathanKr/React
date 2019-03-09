import React, { useState } from "react";
import "./App.css";
import SetIntervalGood from "./SetIntervalGood";
import SetIntervalBad from "./SetIntervalBad";

const App = () => {
  const [isGood, setIsGood] = useState(true);

  return (
    <div className="App">
    <p>Hooks are used to increment a counter once every 1000ms</p>
      <button onClick={() => setIsGood(true)}>SetIntervalGood</button>
      <button onClick={() => setIsGood(false)}>SetIntervalBad</button>
      {isGood ? <SetIntervalGood /> : <SetIntervalBad />}
    </div>
  );
};

export default App;
