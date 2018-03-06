import Constants from '../../Common/Constants';
import WinTypes from '../../Common/WinTypes'


class GameLogic
{
    constructor(arBoardCloned,currentUser)
    {
        this.m_arBoardCloned = arBoardCloned;
        this.m_currentUser = currentUser;
    }
    /*
      this should be called on game over only
      all board must be full for draw (this may be improved)
     */
    isDrawGameOver = () => {
        return this.boardIsFull();
      }
  
      boardIsFull(){
        return this.m_arBoardCloned.every(arRaw => this.array1dIsFull(arRaw));
      }
  
      /*
        return {isGameOver : bool , lineType : Lines.LineType or null}
      */
      isGameOver = () =>{
        let result = {isGameOver : false , lineType : null};

        const arFuncs = [this.anyRowIsSame , this.anyColIsSame , this.anyDiagonaIsSame];

        for(let i=0; i<3; i++)
        {
          result.lineType =  arFuncs[i]();
          if(result.lineType != null)
          {
            result.isGameOver = true;
            return result;
          }
        }

        result.isGameOver = this.boardIsFull();

        return result;                
      }
  
      array1dIsFull = (array1dBoard) => {
        return array1dBoard.every(item => item !== Constants.getEmpty());
      }
  
      arrayAllItemAreSameAsCurrentUser = (array1dBoard) =>{
        return array1dBoard.every(item => item === this.m_currentUser);
      }
  
      anyDiagonaIsSame = () => {
        const ar1dDiag1 = this.m_arBoardCloned.map((arRow,index) => arRow[index]);
        const ar1dDiag2 = this.m_arBoardCloned.map((arRow,index) => arRow[2-index]);
          if(this.arrayAllItemAreSameAsCurrentUser(ar1dDiag1))
          {
            return WinTypes.getDiag1();
          } 

          if(this.arrayAllItemAreSameAsCurrentUser(ar1dDiag2))
          {
            return WinTypes.getDiag2();
          } 

          return null;
      }
  
      anyRowIsSame = () =>{
        let arLineType = [WinTypes.getRow1() , WinTypes.getRow2() , WinTypes.getRow3()];
        for(let nRow=0; nRow<3; nRow++)
        {
          if(this.arrayAllItemAreSameAsCurrentUser(this.m_arBoardCloned[nRow])){
            return arLineType[nRow];
          }
        }

        return null;
      }
  
      anyColIsSame = () =>{
        let arLineType = [WinTypes.getCol1() , WinTypes.getCol2() , WinTypes.getCol3()];
        for(let nCol=0; nCol<3; nCol++)
        {
          const ar1dBoardCol = this.m_arBoardCloned.map(arRow => arRow[nCol]);
          if(this.arrayAllItemAreSameAsCurrentUser(ar1dBoardCol)){
            return arLineType[nCol];
          }
        }
  
        return null;
      }
}

export default GameLogic;