import { differenceInYears, parseISO } from 'date-fns'
import { useRouter } from 'next/router'
import { useNow } from 'next-intl'
import { useMemo } from 'react'

export default function useYears(ts: string | Date) {
  const { locale } = useRouter()
  const now = useNow()

  return useMemo(() => {
    const dateTime = ts instanceof Date ? ts : parseISO(ts)
    const years = differenceInYears(dateTime, now)

    return {
      integer: years,
      string: new Intl.RelativeTimeFormat(locale, { numeric: 'auto' }).format(
        years,
        'year'
      ),
    }
  }, [locale, now, ts])
}
