import React, { useEffect , useState} from "react";
import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("useEffect");
    setInterval(() => {
      setCounter(counter + 1)
      console.log('callback is called')
    }, 1000);
  }, []);

  return (
    <div>
      <p>
        setCounter is invoked inside the callback of setInterval which is invoked every 1 sec but state reset
        every time --> problem !!
      </p>
      <button onClick={() => setCounter(counter + 1)}>
        Click to increment the counter
      </button>
      <p>{counter}</p>
    </div>
  );
};

export default App;
