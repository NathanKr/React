import React, { useState } from "react";
import ResourceListComponent from './ResourceListComponent'

const App = () => {
  //url = "https://jsonplaceholder.typicode.com/";
  const [resource, setResource] = useState('posts');

  return (
    <div>
    <div>
      <button onClick={() => setResource('posts')}>Posts</button>
      <button onClick={() => setResource('todos')}>ToDos</button>
    </div>
    <ResourceListComponent resource={resource}/>  
    </div>
  );
};

export default App;
