import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [importance, setImportance] = useState("low");
  if (importance === "high") {
    useEffect(() => console.log(`important idea : ${idea}`));
  }
  const [idea, setIdea] = useState("");
  const [ideas, setIdeas] = useState([]);

  const elements = (
    <ul>
      {ideas.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );

  return (
    <div className="App">
      <h2>high importance will cause error</h2>
      <input placeholder="enter idea ..." onChange={evt => setIdea(evt.target.value)} />
      <br />
      <select
        value={importance}
        onChange={evt => setImportance(evt.target.value)}
      >
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <br />
      <button
        onClick={() => {
          let newIdeas = [...ideas];
          newIdeas.push(idea);
          setIdeas(newIdeas);
        }}
      >
        Add idea
      </button>
      {elements}
    </div>
  );
};

export default App;
