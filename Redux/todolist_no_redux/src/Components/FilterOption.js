import React from 'react';   
import PropTypes from 'prop-types';

function FilterOption(props){
    const style = {color : props.isSelected ? 'grey' : 'black' } ;
                   
    return (<button onClick={props.clickHandler} style={style}>{props.children}</button>);
}


FilterOption.propTypes = {
    isSelected: PropTypes.bool.isRequired,
    clickHandler: PropTypes.func.isRequired
  };

export default FilterOption;

