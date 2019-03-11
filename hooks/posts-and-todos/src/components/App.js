import React, { useState } from "react";
import ResourceListComponentUsingHooks from './ResourceListComponentUsingHooks'
import UsersList from './UserList'

const App = () => {
  const [resource, setResource] = useState('posts');

  return (
    <div>
      <UsersList/>
    <div>
      <button onClick={() => setResource('posts')}>Posts</button>
      <button onClick={() => setResource('todos')}>ToDos</button>
    </div>
    <ResourceListComponentUsingHooks resource={resource}/>  
    </div>
  );
};

export default App;
