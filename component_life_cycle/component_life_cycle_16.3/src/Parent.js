import React, { Component } from 'react';
import './Parent.css';
import Child from './Child';
import Logic from './Logic';

class Parent extends Component {
  state = {showChild : true , 
    childPropsChildren : 1 ,
    shouldComponentUpdate : true ,
    DerivedStateTimeStamp : null};
  
  static write(funcName,ignore,msg){
    Logic.write("Parent",funcName,ignore,msg);
  }

  constructor(props){
    super(props);
    Parent.write("constructor",false);
  }

  render() {
    Parent.write("render",false);
    const clickHandlerToggleShow = () =>{
      this.setState({showChild : !this.state.showChild});
    }

    const clickHandlerToggleProps = () => {
      this.setState({childPropsChildren : this.state.childPropsChildren === 1 ? 2 : 1});
    } 
    
    
    const buttonToggleShow = 
        <button onClick={clickHandlerToggleShow}>setState()</button>;

    const buttonToggleProps = 
        this.state.showChild ?
        <button onClick={clickHandlerToggleProps}>New Props</button> :
        '';

    const showChild = 
      this.state.showChild ?
      <Child ignoreConsoleLessCommon={this.props.ignoreConsoleLessCommon}>
        {this.state.childPropsChildren}
      </Child> : 
      '';

    const buttonForceUpdate = <button onClick={() => {
      this.forceUpdate();
    }}>forceUpdate()</button>;

    const cbShouldComponentUpdate = <React.Fragment>
        <label>shouldComponentUpdate</label>
        <input onChange = {() => {
          this.setState({shouldComponentUpdate : !this.state.shouldComponentUpdate})
        }} defaultChecked = {this.state.shouldComponentUpdate} type='checkbox'/>
      </React.Fragment>;

    return (
      <div style={{margin : '10px' , border:'1px solid blue'}} className="Parent">
      <h2>Parent component</h2>
      <h5>Check console for component life cycle hooks</h5>
        {cbShouldComponentUpdate}
        {buttonToggleShow}
        {buttonToggleProps}
        {buttonForceUpdate}
        {showChild}
      </div>
    );
  }

  shouldComponentUpdate(nextProps, nextState){
    const shouldComponentUpdate = this.state.shouldComponentUpdate;
    Parent.write(   "shouldComponentUpdate" , 
                    this.props.ignoreConsoleLessCommon,
                    "return : "+ shouldComponentUpdate);
    return shouldComponentUpdate;
}

/*
  return value : updated state or null if nothing to update
*/
static getDerivedStateFromProps(nextProps, prevState){
    const updatedState = {DerivedStateTimeStamp : Date.now()}; 
    Parent.write("getDerivedStateFromProps",
    // used like this because i do not have this in static function
    nextProps.ignoreConsoleLessCommon,
    {
        nextProps : nextProps, 
        prevState : prevState , 
        updatedState : updatedState
    });
    return updatedState;
}

getSnapshotBeforeUpdate(prevProps, prevState) {
  const snapshot = "snapshot retured from getSnapshotBeforeUpdate : " + Date.now();
    const args = {
        prevProps : prevProps,
        prevState : prevState,
        snapshot : snapshot};
    Parent.write( "getSnapshotBeforeUpdate",
                  this.props.ignoreConsoleLessCommon,
                  args);
    return args.snapshot;
}

componentDidMount(){
    Parent.write("componentDidMount",false);
}

// --- snapshot is return from getSnapshotBeforeUpdate
componentDidUpdate(prevProps, prevState, snapshot){
    const args = {
        prevProps : prevProps,
        prevState : prevState,
        snapshot : snapshot};
    Parent.write("componentDidUpdate" ,false, args);
}

componentWillUnmount(){
    Parent.write("componentWillUnmount",false);
}

}

export default Parent;
