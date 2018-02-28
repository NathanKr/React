import React from 'react';

function Board(props)
{
    const styleDiv = {border : '2px solid blue'};
    const styleTable = {width:'100%' };

    return(
        <div style={styleDiv}>
            <table style={styleTable}>
            

            <tbody>
                <tr>
                    <td onClick={ () => {
                        props.boardCellClickHandler(0,0);
                    }}>{props.arBoard[0][0]}</td>
                    <td onClick={ () => {
                        props.boardCellClickHandler(0,1);
                    }}>{props.arBoard[0][1]}</td>
                    <td onClick={ () => {
                        props.boardCellClickHandler(0,2);
                    }}>{props.arBoard[0][2]}</td>
                </tr>
                <tr>
                <td onClick={ () => {
                        props.boardCellClickHandler(1,0);
                    }}>{props.arBoard[1][0]}</td>
                    <td onClick={ () => {
                        props.boardCellClickHandler(1,1);
                    }}>{props.arBoard[1][1]}</td>
                    <td onClick={ () => {
                        props.boardCellClickHandler(1,2);
                    }}>{props.arBoard[1][2]}</td>
                </tr>
                <tr>
                <td onClick={ () => {
                        props.boardCellClickHandler(2,0);
                    }}>{props.arBoard[2][0]}</td>
                    <td onClick={ () => {
                        props.boardCellClickHandler(2,1);
                    }}>{props.arBoard[2][1]}</td>
                    <td onClick={ () => {
                        props.boardCellClickHandler(2,2);
                    }}>{props.arBoard[2][2]}</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Board;