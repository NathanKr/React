import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home'
import SignCommon from './Components/SignCommon'
import SignOut from './Components/SignOut'
import OnlyAuthenticated from './Components/OnlyAuthenticated'


import { BrowserRouter , Switch, Route, Link} from 'react-router-dom';

class App extends Component {

  state = {auth:''};

  setAuthState = (auth) => {
    this.setState({auth:auth});
  }
  
  getEmail = () =>{
    return this.state.auth.email;
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <Link to={'/'}>Home</Link>
            {!this.state.auth ? <Link to={'/SignIn'}>Sign In</Link> : ''}
            {!this.state.auth ? <Link to={'/SignUp'}>Sign Up</Link> : '' }
            {this.state.auth ? <Link to={'/SignOut'}>Sign Out</Link> : ''}
            {this.state.auth ? <Link to={'/OnlyAuthenticated'}>Authenticated</Link> : ''}
        <hr />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/SignIn'   render={() => <SignCommon isSignIn={true} 
                                          setAuthState={this.setAuthState} />} />
            <Route exact path='/SignOut' render={() => <SignOut setAuthState={this.setAuthState}    />} />
            <Route exact path='/SignUp'  render={() => <SignCommon isSignIn={false} 
                                          setAuthState={this.setAuthState} />} />
            <Route exact path='/OnlyAuthenticated'  render={() => <OnlyAuthenticated getEmail={this.getEmail}/>}  />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
