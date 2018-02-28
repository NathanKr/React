import React, { Component } from 'react';
import Results from '../../Components/Results/Results';
import Board from '../../Components/Board/Board'
import GameLogic from './GameLogic'


class Game extends Component {
 
  style = {width : '50%'};
  empty = '_';
  o='O';
  x='X';
  
  
  constructor(props)
  {
    super(props);

    this.state = {
      arBoard : this.getEmptyBoard(), 
      results : {drawNums :0 , oWinsNum: 0 , xWinsNum:0},
      currentUser : this.o
    };
  }
  
  getEmptyBoard = () =>{
    return [[this.empty,this.empty, this.empty],
    [this.empty,this.empty,this.empty],
    [this.empty,this.empty,this.empty]];
  }

  boardCellClickHandler = (rowIndex,colIndex) =>{
      const arBoardClone =[ [...this.state.arBoard[0]],
                            [...this.state.arBoard[1]],
                            [...this.state.arBoard[2]]
                          ];
                          
      arBoardClone[rowIndex][colIndex] = this.state.currentUser;
      const gameLogic = new GameLogic(arBoardClone,this.state.currentUser,this.empty);

      this.updateState(gameLogic);
    }

  updateState = (gameLogic) =>{
    if(gameLogic.isGameOver())
      {
        this.setState({arBoard : gameLogic.m_arBoardCloned});

        let resultsCloned = {...this.state.results};
        if(gameLogic.isDrawGameOver()){
          resultsCloned.drawNums++;
        }
        else
        {
          if(this.state.currentUser === this.o){
            resultsCloned.oWinsNum++;
          }
          else{
            resultsCloned.xWinsNum++;
          }
        }
        this.setState({results : resultsCloned});
      }
      else
      {
        const newCurrentUser = (this.state.currentUser === this.o) ? this.x : this.o;
        this.setState({arBoard : gameLogic.m_arBoardCloned , currentUser : newCurrentUser});
      }
  }

    
  render() {
    return (
      <div>
        <Board  boardCellClickHandler= {this.boardCellClickHandler} 
                arBoard={this.state.arBoard}/>
        <Results results={this.state.results}/>
      </div>
    );
  }
}

export default Game;
