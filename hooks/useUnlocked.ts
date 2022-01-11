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
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      })
      const json = await res.json()
      if (mounted.current) {
        if (res.ok) {
          setUnlocked(json)
        } else {
          setError(json.error)
        }
      }
    } catch (err) {
      console.error(err)
      if (mounted.current) {
        setError(err)
      }
    } finally {
      if (mounted.current) {
        setLoading(false)
      }
    }
  }, [])

  return { unlocked, loading, error, setError, unlock }
}

export type UnlockProps = ReturnType<typeof useUnlocked>
