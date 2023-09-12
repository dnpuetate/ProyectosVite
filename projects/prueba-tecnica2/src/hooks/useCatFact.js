import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/facts.js'
export function useCatFact () {
  const [fact, setFact] = useState()
  // obtener datos y actualizar el estado de reacción
  const refreshFact = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }

  // para recuperar la cita al cargar la página
  useEffect(refreshFact, [])

  return { fact, refreshFact }
}
