import React from 'react';
import './UserOutput.css'


export function UserOutput (props) {
    return (
        <div className = 'UserOutput'>
            <h2>Output Component</h2>
            <p>user name</p>
            <p>{props.name}</p>
        </div>
    );
}
