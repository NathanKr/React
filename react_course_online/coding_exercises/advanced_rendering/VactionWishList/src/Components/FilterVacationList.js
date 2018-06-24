import React  from 'react';
import FilterOption from '../Components/FilterOption';
import Options from '../Logic/Options';


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

export default FilterVacationList;