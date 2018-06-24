import React from 'react';
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
            bShow = item.vacationIsActive;
            break;
    
            case Options.COMPLETED:
            bShow = !item.vacationIsActive;
            break;
    
            default:
            bShow = false;
        }

        return bShow;
    }


    elements = props.listVacation.map((item,index) =>{
        return showItem(props.option,item) ?  <VacationListItem  
        clickHandler={
         () => props.toggleIsActiveHandler(index)
        } 
        key={index}>{item}</VacationListItem> : ''}
    );
    

return(<ol style={{display:'inline-block'}}>{elements}</ol>);
}



export default ShownVacationList ;