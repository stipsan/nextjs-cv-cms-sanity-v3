// Done in a separate file until nextjs gets better at stripping SSR code from the bundle
import { intervalToDuration, isPast, parseISO } from 'date-fns'
import { sanityClient } from 'lib/sanity.server'
import { groq } from 'next-sanity'

const experienceQuery = groq`*[_type == 'experience']{
  _id, 
  role, 
  "company": company->name, 
  "href": company->linkedin, 
  "logo": company->logo.asset->{
    "src": url,
    "height": metadata.dimensions.height,
    "width": metadata.dimensions.width
  },
  joined,
  left,
  location,
  flag,
  mapUrl,
  remote
}`

const staticItems = [
  {
    id: 'sd',
    type: 'changed-name',
    date: '2018-06-12',
    from: 'Stian Didriksen',
    to: 'Cody Olsen',
  },
]

type WorkExperience = {
  id: string
  type: 'worked'
  role: string
  company: string
  joined: string
  left: string | null
  location: string
  flag: string
  href: string
  mapUrl: string
  remote?: boolean
  range?: string
  duration?: {
    years: number
    months: number
  }
}
type NameChangeExperience = {
  id: string
  type: 'changed-name'
  date: string
  from: string
  to: string
}
type Experience = WorkExperience | NameChangeExperience
export type Experiences = Experience[]

export async function getStaticProps({ locale }: { locale: string }) {
  const formatter = new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'short',
  })
  const results = await sanityClient.fetch(experienceQuery)
  const items = [
    ...results.map((result) => ({ ...result, type: 'worked' })),
    staticItems,
  ]
  const experiences = items
    // Don't need this anymore after I've started in the new position
    .filter((item) => (item.joined ? isPast(parseISO(item.joined)) : null))
    .map((item) => {
      if (item.type === 'changed-name') {
        const { date } = item
        return { ...item, date: formatter.format(parseISO(date)) }
      }

      const { joined, left, ...rest } = item
      if (joined && left) {
        const parsedJoined = parseISO(joined)
        const parsedLeft = parseISO(left)
        // @ts-expect-error ts-migrate(2339) FIXME: Property 'format' does not exist on type 'Intl.DateTimeFormat'.
        const range = formatter.formatRange(parsedJoined, parsedLeft)
        return {
          ...rest,
          range,
          duration: getDuration(parsedJoined, parsedLeft),
        }
      }

      // No left date means it's the current job
      if (joined) {
        const parsedJoined = parseISO(joined)
        return {
          ...item,
          joined: formatter.format(parsedJoined),
          duration: getDuration(parsedJoined, new Date()),
        }
      }

      return item
    })

  return { experiences }
}

function getDuration(start: Date, end: Date) {
  const duration = intervalToDuration({ start, end })
  return {
    years: duration.years,
    months: duration.months + (duration.days > 8 ? 1 : 0),
  }
}
