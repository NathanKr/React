import React, { Component } from 'react';
import PropTypes from 'prop-types';


class IncrementDecrement extends Component {
  

  render() {
    return (
        <div>
            <button onClick={ () => this.props.setCount(1)}>Increment by 1</button>
            <button onClick={ () => this.props.setCount(-1)}>Decrement by 1</button>
            <button onClick={ () => this.props.setCount(10)}>Fast Increment</button>
            <button onClick={ () => this.props.setCount(-10)}>Fast Decrement</button>
            <p>count :{this.props.count}</p>
        </div>
    );
  }
}

IncrementDecrement.propTypes = {
  count: PropTypes.number
};

export default IncrementDecrement;
