import { useCallback, useEffect, useRef, useState } from 'react'

export type Unlocked = {
  user: string
  data: {
    street: string
    postalCode: string
    phone: string
  }
}

export default function useUnlocked() {
  const [unlocked, setUnlocked] = useState<Unlocked>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const mounted = useRef(true)
  useEffect(() => {
    mounted.current = true
    return () => {
      mounted.current = false
    }
  }, [])

  const unlock = useCallback(async (password: string) => {
    setLoading(true)
    try {
      setError(null)
      const res = await fetch('/api/unlock', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })
      const json = await res.json()
      if (mounted.current) {
        if (res.ok) {
          setUnlocked(json)
          localStorage.setItem('unlock', password)
        } else {
          setError(json.error)
          localStorage.removeItem('unlock')
        }
      }
    } catch (err) {
      console.error(err)
      if (mounted.current) {
        setError(err)
      }
      localStorage.removeItem('unlock')
    } finally {
      if (mounted.current) {
        setLoading(false)
      }
    }
  }, [])

  useEffect(() => {
    if (localStorage.getItem('unlock')) {
      unlock(localStorage.getItem('unlock') as string)
    }
  }, [unlock])

  return { unlocked, loading, error, setError, unlock }
}

export type UnlockProps = ReturnType<typeof useUnlocked>
