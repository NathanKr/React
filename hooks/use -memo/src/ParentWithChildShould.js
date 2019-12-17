import React, { useState } from "react";
import "./App.css";
import Child1should from "./Child1should";
import Child2should from "./Child2should";

const ParentWithChildShould = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  return (
    <div>
      <h3>Parent with childs using shouldComponentUpdate</h3>
      <p>change of a or b DO NOT cause render of Child1 and Child2</p>
      <p>render is done per a\b dependence -> check console</p>
      <button onClick={() => setA(a + 1)}>Increment a</button>
      <button onClick={() => setB(b + 1)}>Increment b</button>
      <Child1should a={a} />
      <Child2should b={b} />
    </div>
  );
};

export default ParentWithChildShould;
