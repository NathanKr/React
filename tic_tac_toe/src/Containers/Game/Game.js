import React, { Component } from 'react';
import Results from '../../Components/Results/Results';
import Board from '../../Components/Board/Board'
import GameLogic from './GameLogic'
import './Game.css'
import Constants from '../../Common/Constants';



class Game extends Component {
  winLineType = null;
  currentUser = Constants.getO();
  needClearGame = false;

  state = {
      arBoard : Game.getEmptyBoard(), 
      results : {drawNums :0 , oWinsNum: 0 , xWinsNum:0 }
    };
  
  clearGame = () => {
    this.winLineType = null;
    this.currentUser = Constants.getO();
    this.setState({arBoard : Game.getEmptyBoard()});
  }
    
  static getEmptyBoard = () =>{
    return [  [Constants.getEmpty(),Constants.getEmpty(), Constants.getEmpty()],
              [Constants.getEmpty(),Constants.getEmpty(),Constants.getEmpty()],
              [Constants.getEmpty(),Constants.getEmpty(),Constants.getEmpty()]];
  }

  boardCellClickHandler = (rowIndex,colIndex) =>{
      const arBoardClone =[ [...this.state.arBoard[0]],
                            [...this.state.arBoard[1]],
                            [...this.state.arBoard[2]]
                          ];

      arBoardClone[rowIndex][colIndex] = this.currentUser;
      const gameLogic = new GameLogic(arBoardClone,this.currentUser);
      if(this.needClearGame)
      {
        this.clearGame();
        this.needClearGame=false;
      }
      else{
        this.updateNewState(gameLogic);
      }
    }

  updateNewState = (gameLogic) =>{
    let newState;
    const result = gameLogic.isGameOver();
      if(result.isGameOver)
      {
        console.log(result);
        let resultsCloned = {...this.state.results};
        if(gameLogic.isDrawGameOver()){
          resultsCloned.drawNums++;
        }
        else
        {
          if(this.currentUser === Constants.getO()){
            resultsCloned.oWinsNum++;
          }
          else{
            resultsCloned.xWinsNum++;
          }
          this.winLineType = result.lineType;
        }
        newState = {arBoard : gameLogic.m_arBoardCloned , results : resultsCloned};
      } 
      else
      {
        const newCurrentUser = (this.currentUser === Constants.getO()) ? Constants.getX() : Constants.getO();
        this.currentUser = newCurrentUser;
        newState = {arBoard : gameLogic.m_arBoardCloned};
      }

      this.setState(newState);// all new state is here
  }

 

  componentDidUpdate()
  {
    const gameLogic = new GameLogic(this.state.arBoard,this.currentUser);

    const result = gameLogic.isGameOver();
    if(result.isGameOver)
    {
      this.needClearGame=true;
    }
  }
    
  render() {
    return (
      <div className='Game'>
        <Board  boardCellClickHandler= {this.boardCellClickHandler} 
                arBoard={this.state.arBoard}
                winLineType = {this.winLineType}/>
        <Results results={this.state.results} currentUser={this.currentUser}/>
      </div>
    );
  }
}

export default Game;
