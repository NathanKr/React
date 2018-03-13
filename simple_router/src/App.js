import React, { Component } from 'react';
import './App.css';
import Home from './Home/Home';
import Login from './Login/Login';
import { BrowserRouter , Switch, Route, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <Link to={'/'}>Home</Link>
            <Link to={'/Login'}>Login</Link>
        <hr />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Login' component={Login} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
