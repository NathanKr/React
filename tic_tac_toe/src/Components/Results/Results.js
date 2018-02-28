import React from 'react';

function Results(props)
{
    const style = {border : '2px solid blue'};
    const styleTable = {width:'100%' };

    return(
        <div style={style}>
            <table style={styleTable}>
             <tbody>
                <tr>
                    <th>X wins</th>
                    <th>Draws</th> 
                    <th>O wins</th>
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

export default Results;