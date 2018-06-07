import React, { Component } from 'react';

class Child4 extends Component {
    render() {
        return (
            <div>
                <h2>component Child4</h2>
                <button onClick={() => {
                    this.props.history.push('/Child2?arg1=25&arg2=26')
                }}>Click to route to Child2</button>
            </div>
        );
    }
}

export default Child4;