import { useState } from "react";
import confetti from "canvas-confetti";
const TURNS = {
  X: 'x',
  O: 'o'
}

// FUNCION SQUARE ----------------------------------------------

const Square = ({ children, isSelected, updateBoard, index }) => {

  const className = `square ${isSelected ? 'is-selected' : ''}`

  /*PASO 3. LLAMAR A LA FUNCION UPDATEBORAD PARA ACUALIZAR EL TABLERO
    envia el "index" para saber la posicion del click en el tablero
  */
  const handleClick = () => {
    updateBoard(index)
  }

  //PASO 2. CUANDO ALGUIEN HAGA CLICK EN LOS CUADRADOS, EJECUTA HANDLECLIC
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}


//-----------------------------------------------------------

const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

//APP ----------------------------------------------------


function App() {

  //CREAR BOARD 
  const [board, setBoard] = useState(
    Array(9).fill(null)
    )
  //console.log(board)

  //TURNO - ACTUALIZAR TURNO
  const [turn, setTurn] = useState(TURNS.X)

  //elejir ganador
  //null es que no hay ganador, false es que hay empate
  const [winner, setWinner] = useState(null) 

  
  const checkWinner = (boardToCheck) => {
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

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const checkEndGame = (newBoard) => {
    //revisamos si hay un empate
    //si no hay mas espacios vacios
    //en el tablero

    //si todas los cuadrados del tablero => son diferentes a null
    return newBoard.every((square) => square !== null)
  }


  //PASO 4.  ACTUALIZAR ESTADOS / ELEGIR EL GANADOR 
  const updateBoard = (index) => {
    //crear una copia del tablero - nuevo tablero
    // no actualizamos esta posición
    // si ya tiene algo
    if(board[index] || winner)  return 

    //actualizar el tablero
    const newBoard = [... board]
    //poner en el indice el valor que contiene el turno actual "x o" 
    newBoard[index] = turn
    setBoard(newBoard)

    //cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    //revisar si hay ganador
    const newWinner = checkWinner(newBoard)

    //si tenemos un nuevo ganador
    if(newWinner){
      
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)){
      //TODO: CHECK IF GAME IS OVER
      setWinner(false) //empate
    }
  }


  //PASO 1. SE RENDERIZA CADA UNO DE LOS CUADRADOS DEL TABLERO
  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className="game">
        {
          board.map((square, index) => {
            return (
                  <Square
                    key={index}
                    index={index}
                    updateBoard={updateBoard}
                  >
                    {square}
                  </Square>
            )
          })
        }
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
      {
        winner !== null && (
          <section className="winner">
            <div className="text">
              <h2>
                {
                  winner === false
                  ? 'Empate'
                  : 'Gano:'
                }
              </h2>
              <header className="win">
                {winner && <Square>{winner}</Square>}
              </header>
              <footer>
                <button onClick={resetGame}>Empezar de nuevo</button>
              </footer>
            </div>
          </section>
        )
      }
    </main>
  )


}

export default App
