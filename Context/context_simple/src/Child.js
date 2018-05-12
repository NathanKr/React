import React from 'react';
import ChildChild from './ChildChild';
import {LangContext} from './LangContext';

function Child(props)
{
    return (
                <div>
                    <LangContext.Consumer>
                        {val => <p>context from App provider : {val}</p>}
                    </LangContext.Consumer>
                    <h1>Child component</h1>
                    <h2>{props.msg} , {props.children}</h2>
                    <ChildChild msg="message from Child">children from Child</ChildChild>
                </div>
            
        );
}

export default Child;