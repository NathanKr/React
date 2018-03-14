import React , { Component } from 'react';

class Login extends Component {
    componentDidMount()
    {
        console.log(this.props);
    }

    render() {
      return <h2>Login</h2>;
    }
}


export default Login;