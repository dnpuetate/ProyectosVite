import { WINNER_COMBOS} from "../constants"
export const checkWinnerFrom = (boardToCheck) => {
    /*
    Revisamos todas las combinaciones ganadores 
    para ver si gano X u O   
    */
    for (const combo of WINNER_COMBOS){
      const [a, b, c] = combo
      if( 
        boardToCheck[a] && // 0 -> x u o
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a] // x u o
      }
    }
    //si no hay ganador
    return null
  }


  export const checkEndGame = (newBoard) => {
    //revisamos si hay un empate
    //si no hay mas espacios vacios
    //en el tablero

    //si todas los cuadrados del tablero => son diferentes a null
    return newBoard.every((square) => square !== null)
  }
