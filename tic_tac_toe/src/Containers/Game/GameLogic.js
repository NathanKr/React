class GameLogic
{
    constructor(arBoardCloned,currentUser,empty)
    {
        this.m_arBoardCloned = arBoardCloned;
        this.m_currentUser = currentUser;
        this.m_empty = empty;
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
  
      isGameOver = () =>{
        return  this.anyRowIsSame() ||
                this.anyColIsSame() ||
                this.anyDiagonaIsSame() ||
                this.boardIsFull();
      }
  
      array1dIsFull = (array1dBoard) => {
        return array1dBoard.every(item => item !== this.m_empty);
      }
  
      arrayAllItemAreSameAsCurrentUser = (array1dBoard) =>{
        return array1dBoard.every(item => item === this.m_currentUser);
      }
  
      anyDiagonaIsSame = () => {
        const ar1dDiag1 = this.m_arBoardCloned.map((arRow,index) => arRow[index]);
        const ar1dDiag2 = this.m_arBoardCloned.map((arRow,index) => arRow[2-index]);
        return  this.arrayAllItemAreSameAsCurrentUser(ar1dDiag1) ||
                this.arrayAllItemAreSameAsCurrentUser(ar1dDiag2);
      }
  
      anyRowIsSame = () =>{
        return this.m_arBoardCloned.some(arRow => this.arrayAllItemAreSameAsCurrentUser(arRow)); 
      }
  
      anyColIsSame = () =>{
        for(let nCol=0; nCol<3; nCol++)
        {
          const ar1dBoardCol = this.m_arBoardCloned.map(arRow => arRow[nCol]);
          if(this.arrayAllItemAreSameAsCurrentUser(ar1dBoardCol)){
            return true;
          }
        }
  
        return false;
      }
}

export default GameLogic;