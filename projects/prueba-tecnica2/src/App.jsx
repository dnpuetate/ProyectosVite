import { useEffect, useState } from 'react'
import './App.css'
import { getRandomFact } from './services/facts'
import { useCatImage } from './hooks/useCatImage'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App () {
  const [fact, setFact] = useState()
  const { imageUrl } = useCatImage({ fact })
  // para recuperar la cita al cargar la pagina
  useEffect(() => {
    getRandomFact().then(newFact => setFact(newFact))
  }, [])

  const handleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      <section>
        <button onClick={handleClick}>Get new fact</button>
        {fact && <p>{fact}</p>}
        {imageUrl && <img
          src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Image extracted using the first three words for ${fact}`}
                     />}

      </section>
    </main>

  )
}
