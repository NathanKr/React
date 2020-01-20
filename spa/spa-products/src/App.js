import React from 'react';
import './App.css';
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom'
import Home from './Home';
import Products from './Products';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to='/'>Home</Link>
        <Link to='/Products'>Products</Link>
        <Switch>
          <Route exact path = '/' component={Home}/>
          <Route exact path = '/Products' component={Products}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
