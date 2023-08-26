import { useState } from "react";

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



//APP ----------------------------------------------------


function App() {

  //CREAR BOARD 
  const [board, setBoard] = useState(
    Array(9).fill(null)
    )
  //console.log(board)

  //TURNO - ACTUALIZAR TURNO
  const [turn, setTurn] = useState(TURNS.X)

  //PASO 4.  ACTUALIZAR ESTADOS / ELEGIR EL GANADOR 
  const updateBoard = (index) => {
    //crear una copia del tablero - nuevo tablero
    const newBoard = [... board]
    
    //poner en el indice el valor que contiene el turno actual "x o" 
    newBoard[index] = turn

    //actualizar el tablero
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
  }


  //PASO 1. SE RENDERIZA CADA UNO DE LOS CUADRADOS DEL TABLERO
  return (
    <main className='board'>
      <h1>Tic tac toe</h1>

      <section className="game">
        {
          board.map((_, index) => {
            return (
                  <Square
                    key={index}
                    index={index}
                    updateBoard={updateBoard}
                  >
                    {board[index]}
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
    </main>
  )


}

export default App
