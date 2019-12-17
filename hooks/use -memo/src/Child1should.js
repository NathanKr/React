import React, { Component } from 'react';

class Child1should extends Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.a !== this.props.a;
      }

    render() {
        console.log('child1 render')

        return (
            <div>
                child 1 a : {this.props.a}
            </div>
        );
    }
}

export default Child1should;