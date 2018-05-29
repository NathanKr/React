import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
    state = {flag : true , mountChild : true};
    write = (funcName,msg) => {
        if(msg === undefined)
        {
            msg = "";
        }
        console.log("Parent" ,funcName, msg);
    }

    constructor(props){
        super(props);
        this.write("constructor");
    }

    render() {
        this.write("render");
        return (
            <div>
                <button onClick={ () =>{
                    this.setState({mountChild : !this.state.mountChild})
                }}>Mount \ Unmount Child</button>
                <h2 onClick={ () => {
                    this.setState({flag : !this.state.flag})
                }}>Parent {this.state.flag ? 'component' : 'Component'}</h2>
               { this.state.mountChild ? <Child text = {this.state.flag ? 'text1' : 'text2'}/> : ''}
            </div>
        );
    }

    componentDidMount()
    {
        this.write("componentDidMount");
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        const msg = {prevProps:prevProps,prevState:prevState,snapshot:snapshot}
        this.write("componentDidUpdate",msg);
    }

    componentWillUnmount(){
        this.write("componentWillUnmount");
    }
}

export default Parent;