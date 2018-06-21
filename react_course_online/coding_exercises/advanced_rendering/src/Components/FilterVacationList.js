import React  from 'react';
import FilterOption from '../Components/FilterOption';
import Options from '../Logic/Options';
import PropTypes from 'prop-types';


function FilterVacationList (props){

    const elements = Options.options.map(
        (item,index) => 
                <FilterOption 
                isSelected = {index === props.selectedOptionIndex}
                clickHandler = {() =>{
                    props.setSelectedOptionIndex(index);
                }}
                key={index}>{item}</FilterOption>
    );

    return (
        <div>
            {elements}
        </div>);
    
}

FilterVacationList.propTypes = {
    setSelectedOptionIndex : PropTypes.func.isRequired,
    selectedOptionIndex :  PropTypes.number.isRequired
};

export default FilterVacationList;