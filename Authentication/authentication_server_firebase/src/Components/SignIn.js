import React from 'react'
import SignCommon from './SignCommon'
import PropTypes from 'prop-types'


function SignIn(props){
    return <SignCommon auth={props.auth} isSignIn={true}/>;
}

SignIn.propTypes = {
    auth :  PropTypes.object
}

export default SignIn