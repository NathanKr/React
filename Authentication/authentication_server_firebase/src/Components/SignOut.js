import React from 'react'
import AuthStorage from '../Logic/AuthStorage';
import { Redirect } from 'react-router';


function SignOut(){
    AuthStorage.removeAuth();

    return <Redirect to='/' />
}

export default SignOut;