export const saveGameToStorage = ({board, turn}) => {
    //GUARDAR PARTIDA PT1--------------------------------------------------------------------------
    window.localStorage.setItem('board', JSON.stringify(board))
    window.localStorage.setItem('turn', turn)
}


export const resetGameStorage = () => {
    //Borrar board y turno del storage PT1---------------
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
}