import React, { Component } from 'react';

class Child1 extends Component {
    render() {
        return (
            <div>
            <h2>Child1 component</h2>
            <p>{this.props.match.params.number}</p>
            </div>
        );
    }
}

export default Child1;