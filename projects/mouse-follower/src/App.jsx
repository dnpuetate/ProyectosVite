import './App.css'
import { useEffect, useState } from 'react'

function App () {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    console.log('effect', { enabled })

    // clientX and ClientY es la posicion de mi mouse por defecto
    const handleMove = (event) => {
      const { clientX, clientY } = event

      console.log('handleMove', { clientX, clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }
  }, [enabled]) // este efecto se tiene que ejecutar para vez que cambie el efecto de enable

  return (
    <main>
      <div
        style={{
          position: 'absolute',
          backgroundColor: '#09f',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -20,
          top: -20,
          width: 48,
          height: 40,
          transform: 'translate(0px, 0px)'
        }}
      />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </main>
  )
}

export default App
