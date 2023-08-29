import { useState } from "react";
import confetti from "canvas-confetti";

//importar componentes 

import { Square } from "./components/Square.jsx";

import { checkWinnerFrom } from "./logic/board.js";

import { WinnerModal } from "./components/WinnerModal.jsx";
// importar constantes 

import { checkEndGame } from "./logic/board.js";


import { TURNS } from "./constants.js";
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

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
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
    const newWinner = checkWinnerFrom(newBoard)

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
      <WinnerModal resetGame={resetGame} winner={winner}/>
    </main>
  )


}

export default App
