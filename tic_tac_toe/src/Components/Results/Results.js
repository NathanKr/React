import React from 'react';
import './Results.css';
import '../../Common/Constants'
import Constants from '../../Common/Constants';
import PropTypes from 'prop-types'; 


function Results(props)
{
    const styleTable = {width: Constants.getTableAndCanvasWidth()+'px' };
    let styleUserO,styleUserX;
    if(props.currentUser === Constants.getO())
    {
        styleUserO={color:'blue'};
        styleUserX={color:'white'};
    } 
    else{
        styleUserX={color:'blue'};
        styleUserO={color:'white'};
    }

    return(
        <div className='Results'>
            <table style={styleTable}>
             <tbody>
                <tr>
                    <th><span style={styleUserX}>X</span> wins</th>
                    <th>Draws</th> 
                    <th><span style={styleUserO}>O</span> wins</th>
                </tr>
                <tr>
                    <td>{props.results.xWinsNum}</td>
                    <td>{props.results.drawNums}</td> 
                    <td>{props.results.oWinsNum}</td>
                </tr>
             </tbody>
            </table>
        </div>
    )
}


Results.propTypes = { 
    results : PropTypes.object,
    currentUser : PropTypes.string
 }

export default Results;