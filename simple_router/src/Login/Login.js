import React , { Component } from 'react';

<<<<<<< HEAD
class Login extends Component {
    componentDidMount()
    {
        console.log(this.props);
    }

    render() {
      return <h2>Login</h2>;
    }
=======

function Login(props)
{
    console.log(props);
    return <h2>Login</h2>;
>>>>>>> fd4e14d11bbedd06d9475d35e3a83b526ea57087
}

export default Login;