import React, { Component } from 'react';
import './App.css';
import Home from './Home/Home';
import Child1 from './Child1/Child1';
import Child2 from './Child2/Child2';
import { BrowserRouter , Switch, Route, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <Link to={'/'}>Home</Link>
            <Link to={'/Child1/3'}>Child1->3</Link>
            <Link to="/Child2?arg1=5&arg2=6">Child2->5,6</Link>
        <hr />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/Child1/:number' component={Child1} />
            <Route path='/Child2' component={Child2} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
