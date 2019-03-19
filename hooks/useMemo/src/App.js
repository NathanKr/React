import React from "react";
import "./App.css";
import ParentWithuseMemo from './ParentWithuseMemo'
import Parent from './Parent'

const App = () => {

  return (
    <div className="App">
    <ParentWithuseMemo/>
    <Parent/>
    </div>
  );
};

export default App;
