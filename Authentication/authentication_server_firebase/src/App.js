import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home'
import SignOut from './Components/SignOut'
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
import OnlyAuthenticated1 from './Components/OnlyAuthenticated1'
import OnlyAuthenticated2 from './Components/OnlyAuthenticated2'


import { BrowserRouter , Switch, Route, Link} from 'react-router-dom';
import AuthStorage from './Logic/AuthStorage';

class App extends Component {

   state = {auth:null};

   setAuthState = (auth) => {
    this.setState({auth:auth});
  }

 
 componentDidMount(){
   console.log('component did mount');
   console.log(AuthStorage.getAuth());
   AuthStorage.init(this.setAuthState);
 }

  getEmail = () =>{
    return this.state.auth.email;
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <Link to={'/'}>Home</Link>
            {!AuthStorage.isAuthValid(this.state.auth) ? <Link to={'/SignIn'}>Sign In</Link> : ''}
            {!AuthStorage.isAuthValid(this.state.auth) ? <Link to={'/SignUp'}>Sign Up</Link> : '' }
            {AuthStorage.isAuthValid(this.state.auth) ? <Link to={'/SignOut'}>Sign Out</Link> : ''}
            {AuthStorage.isAuthValid(this.state.auth) ? <Link to={'/OnlyAuthenticated1'}>Authenticated1</Link> : ''}
            {AuthStorage.isAuthValid(this.state.auth) ? <Link to={'/OnlyAuthenticated2'}>Authenticated2</Link> : ''}
        <hr />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/SignIn'   render={() => <SignIn auth = {this.state.auth} />} />
            <Route exact path='/SignOut' render={() => <SignOut />} />
            <Route exact path='/SignUp'  render={() => <SignUp auth = {this.state.auth} />} />
            <Route  exact path='/OnlyAuthenticated1'  render={() => <OnlyAuthenticated1 
                    auth = {this.state.auth} getEmail={this.getEmail}/>}  />
            <Route  exact path='/OnlyAuthenticated2'  render={() => <OnlyAuthenticated2 
                    auth = {this.state.auth} getEmail={this.getEmail}/>}  />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
