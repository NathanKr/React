import React, { Component } from 'react';

class Child extends Component {
    write = (funcName,msg) => {
        if(msg === undefined)
        {
            msg = "";
        }
        console.log("Child" ,funcName, msg);
    }


    constructor(props){
        super(props);
        this.write("constructor");
    }

    render() {
        this.write("render");
        return (
            <div>
                <p>{this.props.text}</p>
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

export default Child;