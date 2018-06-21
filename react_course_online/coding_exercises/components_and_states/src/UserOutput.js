import React from 'react';



export function UserOutput (props) {
    return (
        <div>
            <h2>Output Component</h2>
            <p>user name</p>
            <p>{props.name}</p>
        </div>
    );
}
