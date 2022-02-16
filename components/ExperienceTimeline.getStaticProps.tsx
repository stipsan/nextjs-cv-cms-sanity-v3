// Done in a separate file until nextjs gets better at stripping SSR code from the bundle
import { intervalToDuration, isPast, parseISO } from 'date-fns'

/*
{
  "experience": *[_type == 'experience']{
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
  }, 
  "education": *[_type == 'education']{_id,school,degree,field,start,end}
}
*/

const items = [
  {
    id: 'sanity',
    type: 'worked',
    role: 'Full Stack Developer, Applications',
    company: 'Sanity',
    joined: '2022-02-01',
    left: null,
    location: 'Oslo',
    flag: '🇳🇴',
    href: 'https://www.linkedin.com/company/sanity-io/',
    mapUrl: 'http://maps.apple.com/?address=Grunerløkka,Oslo',
  },
  {
    id: 'proxy',
    type: 'worked',
    role: 'Full Stack Engineer',
    company: 'Proxy',
    joined: '2021-01-04',
    left: '2022-01-31',
    location: 'San Francisco',
    flag: '🇺🇸',
    href: 'https://www.linkedin.com/company/proxy-technologies/',
    mapUrl:
      'http://maps.apple.com/?address=500+3rd+Street,Suite+245,San+Francisco',
    remote: true,
  },
  {
    id: 'finn',
    type: 'worked',
    role: 'Senior Full Stack JavaScript Engineer',
    company: 'FINN.no',
    joined: '2018-11-01',
    left: '2020-12-31',
    location: 'Oslo',
    flag: '🇳🇴',
    href: 'https://www.linkedin.com/company/finn-no/',
    mapUrl: 'http://maps.apple.com/?address=Grensen+5-7,Oslo',
  },
  {
    id: 'km',
    type: 'worked',
    role: 'JavaScript Consultant',
    company: 'Kulturmeglerne',
    joined: '2018-09-01',
    left: '2018-10-31',
    location: 'Oslo',
    flag: '🇳🇴',
    href: 'https://www.linkedin.com/company/kulturmeglerne/',
    mapUrl: 'http://maps.apple.com/?address=Brenneriveien+5,Oslo',
  },
  {
    id: 'sd',
    type: 'changed-name',
    date: '2018-06-12',
    from: 'Stian Didriksen',
    to: 'Cody Olsen',
  },
  {
    id: '24',
    type: 'worked',
    role: 'Chief Front-End Engineer',
    company: '24Nettbutikk',
    joined: '2014-11-01',
    left: '2018-08-31',
    location: 'Oslo',
    flag: '🇳🇴',
    href: 'https://www.linkedin.com/company/24nettbutikk/',
    mapUrl: 'http://maps.apple.com/?address=Grev+Wedels+Plass+5,Oslo',
  },
  {
    id: 'yt',
    type: 'worked',
    role: 'Freelance Developer',
    company: 'YOOtheme',
    joined: '2014-09-01',
    left: '2014-09-30',
    location: 'Hamburg',
    flag: '🇩🇪',
    href: 'https://www.linkedin.com/company/yootheme-gmbh/',
    mapUrl: 'http://maps.apple.com/?address=Hongkongstraße+10a,Hamburg',
    remote: true,
  },
  {
    id: 'im',
    type: 'worked',
    role: 'Developer & Project Manager',
    company: 'I Media AS',
    joined: '2014-05-01',
    left: '2014-08-31',
    location: 'Molde',
    flag: '🇳🇴',
    href: 'https://www.linkedin.com/company/i-media-as/',
    mapUrl: 'http://maps.apple.com/?address=Molde',
  },
  {
    id: 'timble',
    type: 'worked',
    role: 'Developer/JavaScript Specialist',
    company: 'Timble',
    joined: '2010-05-01',
    left: '2014-05-31',
    location: 'Leuven',
    flag: '🇧🇪',
    href: 'https://www.linkedin.com/company/timble/',
    mapUrl: 'http://maps.apple.com/?address=Leuven,Belgium',
    remote: true,
  },
  {
    id: 'nf',
    type: 'worked',
    role: 'Designer & Developer',
    company: 'NinjaForge',
    joined: '2008-02-01',
    left: '2012-05-31',
    location: 'Osaka',
    flag: '🇯🇵',
    href: 'https://www.linkedin.com/company/ninjaforge/',
    mapUrl: 'http://maps.apple.com/?address=Osaka,Japan',
    remote: true,
  },
  {
    id: 'pt',
    type: 'worked',
    role: 'Developer',
    company: 'ProThemer',
    joined: '2010-01-01',
    left: '2011-04-30',
    location: 'Cape Town',
    flag: '🇿🇦',
    href: 'https://www.linkedin.com/company/prothemer/',
    mapUrl: 'http://maps.apple.com/?address=Cape+Town,South+Africa',
    remote: true,
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
