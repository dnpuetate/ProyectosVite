import { useEffect, useState } from 'react'
import './App.css'
import { getRandomFact } from './services/facts'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  // Recuperar la imagen cada vez que tenemos una cita nueva
  useEffect(() => {
    if (!fact) return
    const threefirstWords = fact.split(' ', 3).join(' ')
    console.log(threefirstWords)
    fetch(`https://cataas.com/cat/says/${threefirstWords}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { url } = response
        setImageUrl(url)
        // console.log(response)   --> revisamos si la URL en este caso no tiene el prefijo https://cataas.com
      })
  }, [fact])

  return { imageUrl }
} // {imageUrl: 'https:// ...'}

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
