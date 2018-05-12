import React from 'react';
import {LangContext} from './LangContext';


function ChildChild(props)
{
    return (
        <div>
            {/*  */}
            <LangContext.Consumer>
                {value => <p>context from App provider : {value}</p>}
            </LangContext.Consumer>
            <h1>ChildChild component</h1>
            <h2>{props.msg} , {props.children}</h2>
        </div>
    );
}

export default ChildChild;