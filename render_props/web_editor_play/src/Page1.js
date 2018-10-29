import React from "react";

function Page1(props) {
  const elements = props.array.map(it => <h1>page1 item {it}</h1>);
  return (
    <div>
      page1
      {elements}
    </div>
  );
}

export default Page1;
