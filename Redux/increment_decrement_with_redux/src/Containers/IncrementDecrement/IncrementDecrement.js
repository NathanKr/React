import React, { Component } from 'react';
import PropTypes from 'prop-types';


class IncrementDecrement extends Component {
  

  render() {
    return (
        <div>
            <p>got {this.props.count}</p>
            <button>Increment by 1</button>
            <button>Decrement by 1</button>
            <button>Fast Increment</button>
            <button>Fast Decrement</button>
        </div>
    );
  }
}

IncrementDecrement.propTypes = {
  count: PropTypes.number
};

export default IncrementDecrement;
