import React from 'react';
import './Board.css'
import PropTypes from 'prop-types'; 
import Canvas from '../Canvas/Canvas'
import Constants from '../../Common/Constants'


function Board(props)
{
    const styleTable = {    position:'absolute' , 
                            width:Constants.getTableAndCanvasWidth()+'px' ,
                            height:Constants.getTableAndCanvasHeight()+'px' 
                        };
    

    const helper = (_className,row,index) => {
       return  (_className  + ((props.arBoard[row][index] === '_') ? ' Border_td_hide' : ' Border_td_show'));
    };

 
    const Board_td_top_left   = helper('Board_td_top_left',0,0);
    const Board_td_top_center = helper('Board_td_top_left',0,1);
    const Board_td_top_right  = helper('Board_td_top_right',0,2);
    const Board_td_middle_left = helper('Board_td_middle_left',1,0);
    const Board_td_middle_center= helper('',1,1); // no class exist , this is not mistake
    const Board_td_middle_right = helper('Board_td_middle_right',1,2);
    const Board_td_bottom_left   = helper('Board_td_bottom_left',2,0);
    const Board_td_bottom_center = helper('Board_td_bottom_left',2,1);
    const Board_td_bottom_right  = helper('Board_td_bottom_right',2,2);
    
    
   

    return(
       
        <div  className='Board'>
            <table style={styleTable}>
            <tbody>
                <tr>
                    <td className={Board_td_top_left}
                     onClick={ () => {
                        props.boardCellClickHandler(0,0);
                    }}>{props.arBoard[0][0]}</td>
                    <td className={Board_td_top_center} onClick={ () => {
                        props.boardCellClickHandler(0,1);
                    }}>{props.arBoard[0][1]}</td>
                    <td className={Board_td_top_right} onClick={ () => {
                        props.boardCellClickHandler(0,2);
                    }}>{props.arBoard[0][2]}</td>
                </tr>
                <tr>
                <td className={Board_td_middle_left} onClick={ () => {
                        props.boardCellClickHandler(1,0);
                    }}>{props.arBoard[1][0]}</td>
                    <td className={Board_td_middle_center} onClick={ () => {
                        props.boardCellClickHandler(1,1);
                    }}>{props.arBoard[1][1]}</td>
                    <td className={Board_td_middle_right} onClick={ () => {
                        props.boardCellClickHandler(1,2);
                    }}>{props.arBoard[1][2]}</td>
                </tr>
                <tr>
                <td className={Board_td_bottom_left} onClick={ () => {
                        props.boardCellClickHandler(2,0);
                    }}>{props.arBoard[2][0]}</td>
                    <td className={Board_td_bottom_center} onClick={ () => {
                        props.boardCellClickHandler(2,1);
                    }}>{props.arBoard[2][1]}</td>
                    <td className={Board_td_bottom_right} onClick={ () => {
                        props.boardCellClickHandler(2,2);
                    }}>{props.arBoard[2][2]}</td>
                </tr>
                </tbody>
            </table>

            <Canvas winLineType={props.winLineType}/>
        </div>
    )
}



Board.propTypes = { 
    boardCellClickHandler : PropTypes.func,
    arBoard : PropTypes.array
 }
 

export default Board;