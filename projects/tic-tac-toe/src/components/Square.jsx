// FUNCION SQUARE ----------------------------------------------
import PropTypes from 'prop-types'

export const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  /* PASO 3. LLAMAR A LA FUNCION UPDATEBORAD PARA ACUALIZAR EL TABLERO
      envia el "index" para saber la posicion del click en el tablero
    */
  const handleClick = () => {
    updateBoard(index)
  }

  // PASO 2. CUANDO ALGUIEN HAGA CLICK EN LOS CUADRADOS, EJECUTA HANDLECLIC
  return (
      <div onClick={handleClick} className={className}>
        {children}
      </div>
  )
}

// -----------------------------------------------------------
Square.propTypes = {
  children: PropTypes.node, // Valida que "children" sea de tipo nodo (Node)
  isSelected: PropTypes.bool.isRequired, // Valida que "isSelected" sea un booleano requerido
  updateBoard: PropTypes.func.isRequired, // Valida que "updateBoard" sea una función requerida
  index: PropTypes.number.isRequired // Valida que "index" sea un número requerido
}
