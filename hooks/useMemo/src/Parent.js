import React, { useState } from "react";
import "./App.css";
import Child1 from "./Child1";
import Child2 from "./Child2";

const ParentWithuseMemo = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  return (
    <div>
      <h3>Parent</h3>
      <p>
        change of a or b cause render of Child1 and Child2 even tough Child1
        depend on a only and Child2 depend on b only -> check console
      </p>
      <button onClick={() => setA(a + 1)}>Increment a</button>
      <button onClick={() => setB(b + 1)}>Increment b</button>
      <Child1 a={a} />
      <Child2 b={b} />
    </div>
  );
};

export default ParentWithuseMemo;
