import React from 'react';
import PropTypes from 'prop-types';
import Options from '../Logic/Options';
import VacationListItem from '../Components/VacationListItem';


function ShownVacationList(props){
    let elements = [];

    
    const showItem = (option,item) =>{
        let bShow;
        switch(option)
        {
            case Options.ALL:
            bShow = true;
            break;
    
            case Options.ACTIVE:
            bShow = item.todoIsActive;
            break;
    
            case Options.COMPLETED:
            bShow = !item.todoIsActive;
            break;
    
            default:
            bShow = false;
        }

        return bShow;
    }


    elements = props.listToDo.map((item,index) =>{
        return showItem(props.option,item) ?  <VacationListItem  
        clickHandler={
         () => props.toggleIsActiveHandler(index)
        } 
        key={index}>{item}</VacationListItem> : ''}
    );
    

return(<ol style={{display:'inline-block'}}>{elements}</ol>);
}

ShownVacationList.propTypes = {
    listToDo : PropTypes.array.isRequired,
    option : PropTypes.string.isRequired,
    toggleIsActiveHandler : PropTypes.func.isRequired
};

export default ShownVacationList ;