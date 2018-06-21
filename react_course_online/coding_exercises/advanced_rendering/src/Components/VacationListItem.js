import React from 'react';

function VacationListItem(props)
{
    return(<li style={{margin:'10px'}} onClick={props.clickHandler}>{
                        props.children.vacationIsActive ?
                        props.children.vacationDescription :
                        <del>{props.children.vacationDescription}</del>}</li>);
}


export default VacationListItem;