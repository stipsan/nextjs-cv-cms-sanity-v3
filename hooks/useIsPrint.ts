import { useLayoutEffect, useState } from 'react'

export default function useIsPrint() {
  const [matches, setMatches] = useState(false)

  useLayoutEffect(() => {
    const media = window.matchMedia('print')
    if (media.matches) {
      setMatches(media.matches)
    }
    const listener = () => {
      setMatches(media.matches)
    }
    media.addEventListener('change', listener, { once: true })
    return () => media.removeEventListener('change', listener)
  }, [])

  return matches
}
