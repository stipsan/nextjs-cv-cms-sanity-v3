import { differenceInMonths, parseISO } from 'date-fns'
import { useRouter } from 'next/router'
import { useNow } from 'next-intl'
import { useMemo } from 'react'

export default function useMonths(ts: string | Date) {
  const { locale } = useRouter()
  const now = useNow()

  return useMemo(() => {
    const dateTime = ts instanceof Date ? ts : parseISO(ts)
    const months = differenceInMonths(dateTime, now) % 12

    return {
      integer: months,
      string: new Intl.RelativeTimeFormat(locale, { numeric: 'auto' }).format(
        months,
        'month'
      ),
    }
  }, [locale, now, ts])
}
