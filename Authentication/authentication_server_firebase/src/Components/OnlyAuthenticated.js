import React from 'react'

function OnlyAuthenticated(props){
return (
    <div>
        <h3>OnlyAuthenticated component</h3>
        <p>Your email is : {props.getEmail()}</p> 
    </div>
    );
}

export default OnlyAuthenticated;