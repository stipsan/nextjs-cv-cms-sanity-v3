import { useMemo } from 'react'

export default function useShorterUrl(url: string) {
  return useMemo(() => {
    const parsed = new URL(url)

    const parts = parsed.pathname.split('/')
    const handle = parts.pop()
    return (
      <>
        <span className="text-slate-500 hover:text-slate-900 transition-colors">{`${
          parsed.hostname
        }${parts.join('/')}/`}</span>
        {handle}
      </>
    )
  }, [url])
}
