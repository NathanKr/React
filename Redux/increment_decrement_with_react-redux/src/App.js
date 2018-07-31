import React, { Component } from 'react';
import './App.css';
import IncrementDecrement from './IncrementDecrement';
import {connect} from 'react-redux' ;
import ActionType from './Logic/ActionType';

class App extends Component {

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log("props passed to App by react-redux",prevProps,prevState);
}

  render() {
    return (
      <div className="App">
        <h1>Increment \ Decrement using react-redux</h1>
        <IncrementDecrement count={this.props.cnt} setCount={this.props.countHandler}/>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return{
    cnt : state.count  // this.props.cnt is mapped to state.count (store)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // --- // this.props.countHandler is mapped to dispatch (redux)
    countHandler : number => dispatch({
      type:ActionType.ADD , 
      payLoad:number})};
};

export default connect(mapStateToProps,mapDispatchToProps)(App);

