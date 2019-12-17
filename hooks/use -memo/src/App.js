import React from "react";
import "./App.css";
import ParentWithuseMemo from './ParentWithuseMemo'
import Parent from './Parent'
import ParentWithChildShould from './ParentWithChildShould'

const App = () => {

  return (
    <div className="App">
    <ParentWithuseMemo/>
    <Parent/>
    <ParentWithChildShould/>
    </div>
  );
};

export default App;
