import { useEffect, useState } from 'react'
export function useCatImage ({ fact }) {
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
