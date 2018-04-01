import React, { Component } from 'react';
import './App.css';
import IncrementDecrement from './Containers/IncrementDecrement/IncrementDecrement';
import {connect} from 'react-redux' 

class App extends Component {
  render() {
    return (
      <div className="App">
        <IncrementDecrement count={mapStateToProps.cnt} />
        <p>count : get_count_from_state</p>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    cnt : state.count  // cnt is mapped to state
  };
};

export default connect(mapStateToProps)(App);
