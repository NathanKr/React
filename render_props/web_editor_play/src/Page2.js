import React from "react";

function Page2(props) {
  const elements = props.array.map(it => <p>Page2 item {it}</p>);
  return (
    <div>
      Page2
      {elements}
    </div>
  );
}

export default Page2;
