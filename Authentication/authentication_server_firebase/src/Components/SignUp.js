import React from 'react'
import SignCommon from './SignCommon'
import PropTypes from 'prop-types'


function SignUp(props){
    return <SignCommon auth={props.auth} isSignUp={false}/>;
}

SignUp.propTypes = {
    auth :  PropTypes.object
}

export default SignUp