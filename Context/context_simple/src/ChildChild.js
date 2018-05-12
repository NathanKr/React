import React from 'react';
import {UserContext} from './UserContext';


function ChildChild(props)
{
    return (
        <div>
            {/*  */}
            <UserContext.Consumer>
                {value => <p>context from App provider : {value.email}</p>}
            </UserContext.Consumer>
            <h1>ChildChild component</h1>
            <h2>{props.msg} , {props.children}</h2>
        </div>
    );
}

export default ChildChild;