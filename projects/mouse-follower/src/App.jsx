import './App.css'
import { useEffect, useState } from 'react'

// eslint-disable-next-line no-unused-vars
const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    console.log('effect', { enabled })

    // clientX and ClientY es la posicion de mi mouse por defecto
    const handleMove = (event) => {
      const { clientX, clientY } = event

      console.log('handleMove', { clientX, clientY })

      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    // cleanup
    // se ejecuta cuando:
    // -> cuando el componente se desmonta, ej: una ventana
    // -> cuando cambian las dependencias, antes de ejecutar el efecto de nuevo
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled]) // este efecto se tiene que ejecutar para vez que cambie el efecto de enable

  return (
    <>
      <div
        style={{
          position: 'absolute',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          border: '1px solid #fff',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
      />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </>
  )
}

function App () {
  const [mounted, setMounted] = useState(true)

  return (
    <main>
      {mounted && <FollowMouse/>}
       <button onClick={() => setMounted(!mounted)}>
        Toggle mounted FollowMouse component
       </button>
    </main>
  )
}

export default App
