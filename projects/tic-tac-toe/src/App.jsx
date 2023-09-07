import { useState } from 'react'
import confetti from 'canvas-confetti'
// importar componentes
import { Square } from './components/Square.jsx'

import { WinnerModal } from './components/WinnerModal.jsx'

import { checkWinnerFrom, checkEndGame } from './logic/board.js'

import { saveGameToStorage, resetGameStorage } from './logic/storage/index.js'
// importar constantes

import { TURNS } from './constants.js'
// APP ----------------------------------------------------

function App () {
  // CREAR BOARD -------- EL useState y todos los hooks no pueden estar dentro de un if por que tienen un array interno para saber cuando ejecutarse
  const [board, setBoard] = useState(() => {
    // GUARDAR PARTIDA PT2 --- carpeta logic/storage/index
    // recuperar el board del local storage
    const boardFromStorage = window.localStorage.getItem('board')
    // si tengo un board en el storage entonces, traigo los datos del storage como valor inicial,
    // caso contrario inciamos creando un numero board
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  })

  // console.log(board)

  // TURNO - ACTUALIZAR TURNO
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')

    return turnFromStorage ?? TURNS.X
  })

  // elejir ganador
  // null es que no hay ganador, false es que hay empate
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    // Reset game Storage PT2 ------ logic/storage/index
    resetGameStorage()
  }

  // PASO 4.  ACTUALIZAR ESTADOS / ELEGIR EL GANADOR
  const updateBoard = (index) => {
    // crear una copia del tablero - nuevo tablero
    // no actualizamos esta posición
    // si ya tiene algo
    if (board[index] || winner) return

    // actualizar el tablero
    const newBoard = [...board]
    // poner en el indice el valor que contiene el turno actual " x o "
    newBoard[index] = turn
    setBoard(newBoard)

    // cambiar el turno

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // guardar la partida
    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    })

    // revisar si hay ganador
    const newWinner = checkWinnerFrom(newBoard)
    // si tenemos un nuevo ganador
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      // TODO: CHECK IF GAME IS OVER
      setWinner(false) // empate
    }
  }

  // PASO 1. SE RENDERIZA CADA UNO DE LOS CUADRADOS DEL TABLERO
  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className="game">
        {board.map((square, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          )
        })}
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  )
}

export default App
