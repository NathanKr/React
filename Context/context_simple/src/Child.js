import React from 'react';
import ChildChild from './ChildChild';
import {UserContext} from './UserContext';

function Child(props)
{
    return (
                <div>
                    <h2>Child component - Consumer</h2>
                    <h3>{props.msg} , {props.children}</h3>
                    <UserContext.Consumer>
                        {val => <p>context from App provider : {val.email}</p>}
                    </UserContext.Consumer>
                    <ChildChild msg="message from Child">children from Child</ChildChild>
                </div>
            
        );
}

export default Child;