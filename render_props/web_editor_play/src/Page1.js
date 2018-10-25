import React from "react";

function Page1(props) {
  const elements = props.array.map(it => <p>page1 item {it}</p>);
  return (
    <div>
      page1
      {elements}
    </div>
  );
}

export default Page1;
