import React from 'react';
import {useFetchResources} from './customHooks'

const UserList = () => {
    const users = useFetchResources('users');
    const resourcesElements = (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      );

    return (
        <div>
            <h2>Users</h2>
            {resourcesElements}
        </div>
    );
};

export default UserList;