import React , {useEffect} from "react";

const Child1 = ({ clickHandler }) => {
  useEffect(() => console.log("render Child1"));

  return (
    <div>
      Child1
      <button onClick={clickHandler}>click1</button>
    </div>
  );
};

export default Child1;
