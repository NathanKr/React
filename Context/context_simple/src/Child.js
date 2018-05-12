import React from 'react';
import ChildChild from './ChildChild';
import {UserContext} from './UserContext';

function Child(props)
{
    return (
                <div>
                    <UserContext.Consumer>
                        {val => <p>context from App provider : {val.email}</p>}
                    </UserContext.Consumer>
                    <h1>Child component</h1>
                    <h2>{props.msg} , {props.children}</h2>
                    <ChildChild msg="message from Child">children from Child</ChildChild>
                </div>
            
        );
}

export default Child;