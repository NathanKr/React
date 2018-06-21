import React from 'react';   

function FilterOption(props){
    const style = {color : props.isSelected ? 'grey' : 'black' } ;
                   
    return (<button onClick={props.clickHandler} style={style}>{props.children}</button>);
}




export default FilterOption;

