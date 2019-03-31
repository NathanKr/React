import React, { useMemo, useState } from "react";
import "./App.css";
import Child1 from "./Child1";
import Child2 from "./Child2";

const ParentWithuseMemo = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  
  const child1 = useMemo(() => <Child1 a={a} />, [a]);
  const child2 = useMemo(() => <Child2 b={b} />, [b]);

  return (
    <div>
      <h3>ParentWithuseMemo</h3>
      <p>change of a or b DO NOT cause render of Child1 and Child2</p>
      <p>render is done per a\b dependence -> check console</p>
      <button onClick={() => setA(a + 1)}>Increment a</button>
      <button onClick={() => setB(b + 1)}>Increment b</button>
      {child1}
      {child2}
    </div>
  );
};

export default ParentWithuseMemo;
