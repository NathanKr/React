import React from "react";

function Page2(props) {
  const elements = props.array.map(it => <h2>Page2 item {it}</h2>);
  return (
    <div>
      Page2
      {elements}
    </div>
  );
}

export default Page2;
