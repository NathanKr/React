import Constants from '../../Common/Constants';
import Lines from '../../Components/Lines'


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
            return new Lines().LineTypeDiag1;
          } 

          if(this.arrayAllItemAreSameAsCurrentUser(ar1dDiag2))
          {
            return new Lines().LineTypeDiag2;
          } 

          return null;
      }
  
      anyRowIsSame = () =>{
        let arLineType = [new Lines().LineTypeRow1 , new Lines().LineTypeRow2 , new Lines().LineTypeRow3];
        for(let nRow=0; nRow<3; nRow++)
        {
          if(this.arrayAllItemAreSameAsCurrentUser(this.m_arBoardCloned[nRow])){
            return arLineType[nRow];
          }
        }

        return null;
      }
  
      anyColIsSame = () =>{
        let arLineType = [new Lines().LineTypeCol1 , new Lines().LineTypeCol2 , new Lines().LineTypeCol3];
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