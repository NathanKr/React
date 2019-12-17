import React, { useState, useEffect } from "react";
import "./App.css";
import { Button, Input, Dropdown , Form, FormField } from "semantic-ui-react";

const App = () => {
  const [importance, setImportance] = useState("");
  if (importance === "high") {
    useEffect(() => console.log(`important idea : ${idea}`));
  }
  const [idea, setIdea] = useState("");
  const [ideas, setIdeas] = useState([]);

  const importances = [
    { value: "low", text: "Low" },
    { value: "medium", text: "Medium" },
    { value: "high", text: "High" }
  ];

  const getColor = value => {
    switch (value) {
      case "low":
        return "blue";

      case "medium":
        return "orange";

      case "high":
        return "red";

      default:
        return "";
    }
  };

  const elements = (
    <ul>
      {ideas.map((item, index) => (
        <li style={{ color: item.color }} key={index}>
          {item.text}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="App">
      <h2>high importance will cause error</h2>

      <Form>
       <Form.Field>
      <Dropdown selection text="Select importance">
        <Dropdown.Menu>
          {importances.map((it, index) => (
            <Dropdown.Item
              style={{ color: getColor(it.value) }}
              text={it.text}
              value={it.value}
              key={index}
              onClick={() => {
                setImportance(it.value);
              }}
            />
          ))}
        </Dropdown.Menu>
      </Dropdown>
      </Form.Field> 
       <Form.Field>
      <Input
        placeholder="enter idea ..."
        onChange={evt => setIdea(evt.target.value)}
        value={idea}
      />
      </Form.Field> 
       <Form.Field>
      <Button
        disabled={importance === "" || idea === ""}
        primary
        onClick={() => {
          let newIdeas = [...ideas];
          newIdeas.push({ text: idea, color: getColor(importance) });
          setIdeas(newIdeas);
          setImportance("");
          setIdea("");
        }}
      >
        Add idea
      </Button>
      </Form.Field> 
      </Form>
      {elements}
    </div>
  );
};

export default App;
