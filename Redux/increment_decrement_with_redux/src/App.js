import React, { Component } from 'react';
import './App.css';
import IncrementDecrement from './Containers/IncrementDecrement/IncrementDecrement';
import {connect} from 'react-redux' ;
import ActionType from './Logic/ActionType';

class App extends Component {
  render() {
    return (
      <div className="App">
        <IncrementDecrement count={this.props.cnt} setCount={this.props.countHandler}/>
        <p>count :{this.props.cnt}</p>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return{
    cnt : state.count  // this.props.cnt is mapped to state.count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // --- // this.props.countHandler is mapped to dispatch
    countHandler : payLoad => dispatch({type:ActionType.ADD , payLoad:payLoad})};
};

export default connect(mapStateToProps,mapDispatchToProps)(App);

