import React from "react";
import "./App.css";
import Counter from './Conunter'

const App = () => {
  return <div className="App"><Counter initialState = {{count : 0}} /></div>;
};

export default App;

