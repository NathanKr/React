import React, { Component } from 'react';
import './App.css';
import {BrowserRouter , Link , Switch , Route} from 'react-router-dom';
import Home from './Home';
import Child1 from './Child1';
import Child2 from './Child2';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Link to='/'>Home</Link>
        <Link to='/Child1'>Child1</Link>
        <Link to='/Child2'>Child2</Link>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/Child2' component={Child2}/>
          <Route exact path='/Child1' component={Child1}/>
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
