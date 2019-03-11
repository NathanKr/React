import React, { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";
import { Button } from "semantic-ui-react";

const Level4 = () => {
  const value = useContext(LanguageContext);

  let text = "";
  switch (value.language) {
    case "english":
      text = "Click";
      break;

    case "portuguese":
      text = "Clique";
      break;

    default:
      text = "";
  }

  return (
    <div>
      <h2>Level4</h2>
      <p>i need language : {value.language}</p>
      <Button primary>{text}</Button>
    </div>
  );
};

export default Level4;
