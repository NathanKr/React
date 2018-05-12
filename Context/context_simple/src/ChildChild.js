import React from 'react';
import {UserContext} from './UserContext';


function ChildChild(props)
{
    return (
        <div>
            <h2>ChildChild component  - Consumer</h2>
            <h3>{props.msg} , {props.children}</h3>
            <UserContext.Consumer>
                {value => <p>context from App provider : {value.email}</p>}
            </UserContext.Consumer>
        </div>
    );
}

export default ChildChild;