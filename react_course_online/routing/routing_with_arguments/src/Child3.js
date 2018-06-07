import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

class Child3 extends Component {
    state = {flag : false};

    render() {
        if(this.state.flag){
            return <Redirect to='/'/>
        }

        return (
            <div>
                <button onClick={ () =>{
                    this.setState({flag: true});                        
                }}>Click to route to Home</button>
                <h2>Component Child 3</h2>
            </div>
        );
    }
}

export default Child3;