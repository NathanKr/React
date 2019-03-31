import React, { useState, useMemo, useCallback, useEffect } from "react";
import "./App.css";
import Child1 from "./Child1";
import Child2 from "./Child2";

const App = () => {
  const [clicks1, setClicks1] = useState(2);
  const [clicks2, setClicks2] = useState(3);

  const clickHandler1 = () => {
    setClicks1(clicks1 + 1);
  };

  const memoClickHandler1 = useCallback(clickHandler1, [clicks1]);

  const clickHandler2 = () => {
    setClicks2(clicks2 + 1);
  };

  const memoClickHandler2 = useCallback(clickHandler2, [clicks2]);

  useEffect(() => {
    console.log(memoClickHandler1 === clickHandler1);
    console.log(memoClickHandler2 === clickHandler2);
  });

  return (
    <div>
      <p>clicks1 : {clicks1}</p>
      <p>clicks2 : {clicks2}</p>
      {useMemo(
        () => (
          <Child1 clickHandler={memoClickHandler1} />
        ),
        [memoClickHandler1]
      )}
      {useMemo(
        () => (
          <Child2 clickHandler={memoClickHandler2} />
        ),
        [memoClickHandler2]
      )}
    </div>
  );
};

// 1 const App = () => {
//   const [len, setLen] = useState();
//   const [text, setText] = useState("");

//   const computeLength = () => {
//     console.log("called1");
//     setLen(text.length);
//   };

//   const memoComputeLength = useCallback(() => {
//     console.log("called2");
//     computeLength();
//   }, [text]);

//   return (
//     <div className="App">
//       <input onChange={evt => setText(evt.target.value)} />
//       <button onClick={memoComputeLength}>compute</button>
//       <p>length : {len}</p>
//     </div>
//   );
// };

//  2 import React, {
//   useRef,
//   useMemo,
//   useEffect,
//   useState,
//   useCallback
// } from "react";

// const Child = React.memo(({ onClick, suffix }) => {
//   const numRendersRef = useRef(1);
//   useEffect(() => {
//     numRendersRef.current++;
//   });

//   return (
//     <div onClick={() => onClick(suffix)}>
//       Click Me to log a and {suffix} and change b. Number of Renders:{" "}
//       {numRendersRef.current}
//     </div>
//   );
// });
// function App(props) {
//   const [a, setA] = useState("aaa");
//   const [b, setB] = useState("bbb");

//   const computeSomethingExpensiveBasedOnA = () => {
//     console.log("recomputing expensive thing", a);
//     return a + b;
//   };
//   const somethingExpensiveBasedOnA = computeSomethingExpensiveBasedOnA();
//   const memoizedSomethingExpensiveBasedOnA = useMemo(
//     () => computeSomethingExpensiveBasedOnA(),
//     [a]
//   );
//   const nonMemoizedCallback = suffix => {
//     console.log(a + suffix);
//     setB(prev => prev + "b");
//   };
//   const memoizedCallback = useCallback(nonMemoizedCallback, [a]);
//   const memoizedCallbackUsingMemo = useMemo(() => nonMemoizedCallback, [a]);
//   return (
//     <div>
//       A: {a}
//       <br />
//       B: {b}
//       <br />
//       nonMemoizedCallback === memoizedCallback:{" "}
//       {String(nonMemoizedCallback === memoizedCallback)}
//       <br />
//       somethingExpensiveBasedOnA: {somethingExpensiveBasedOnA}
//       <br />
//       memoizedSomethingExpensiveBasedOnA: {memoizedSomethingExpensiveBasedOnA}
//       <br />
//       <br />
//       <div onClick={() => setA(a + "a")}>Click Me to change a</div>
//       <br />
//       <Child onClick={nonMemoizedCallback} suffix="1" />
//       <Child onClick={memoizedCallback} suffix="2" />
//       <Child onClick={memoizedCallbackUsingMemo} suffix="3" />
//     </div>
//   );
// }

export default App;
