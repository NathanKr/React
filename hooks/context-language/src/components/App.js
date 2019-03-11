import React, { useState } from "react";
import { LanguageContext } from "../Context/LanguageContext";
import Level1 from "./Level1";
import {Flag , Segment } from 'semantic-ui-react'

const App = () => {
  const [language, setLanguage] = useState("english");

  const langObj = { language };
  return (
    <div style={{margin : '5px'}}>
      <Segment>
      <Flag onClick={() => setLanguage("english")} name="us"/>
      <Flag onClick={() => setLanguage("portuguese")} name="br" />
      </Segment>
      <LanguageContext.Provider value={langObj}>
        <h2>App</h2>
        <Level1 />
      </LanguageContext.Provider>
    </div>
  );
};

export default App;
