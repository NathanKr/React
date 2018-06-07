import React, { Component } from 'react';

class Child2 extends Component {

    render() {
        const query = new URLSearchParams(this.props.location.search);
        return (
            <div>
                <h2>Child2 component</h2>
                <p>{query.get('arg1')}</p>
                <p>{query.get('arg2')}</p>
            </div>
        );
    }
}

export default Child2;