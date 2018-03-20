import React from 'react'
import AuthStorage from '../Logic/AuthStorage';
import { Redirect } from 'react-router';


function SignOut(props){
    AuthStorage.removeAuth();
    props.setAuthState(null);

    return <Redirect to='/' />
}

export default SignOut;