import { AssertionError } from 'assert'
import { themeFromHuesTemplate } from 'blazing-utils/themeFromHuesTemplate.mjs'
import type { NextRequest } from 'next/server'
import type { Hue } from 'utils/themeFromHues'

export const config = {
  runtime: 'experimental-edge',
}

export default async function handler(req: NextRequest) {
  const { searchParams } = new URL(req.url)

  const lightest = searchParams.has('lightest')
    ? assertValidColor(`#${searchParams.get('lightest')}`)
    : undefined
  const darkest = searchParams.get('darkest')
    ? assertValidColor(`#${searchParams.get('darkest')}`)
    : undefined

  return new Response(
    themeFromHuesTemplate({
      default: parseHue('default', searchParams, lightest, darkest),
      transparent: parseHue('transparent', searchParams, lightest, darkest),
      primary: parseHue('primary', searchParams, lightest, darkest),
      positive: parseHue('positive', searchParams, lightest, darkest),
      caution: parseHue('caution', searchParams, lightest, darkest),
      critical: parseHue('critical', searchParams, lightest, darkest),
    }),
    {
      status: 200,
      headers: {
        'access-control-allow-origin': '*',
        'content-type': 'application/javascript; charset=utf-8',
      },
    }
  )
}

type ParsedHue = Partial<Hue>
function parseHue(
  key: string,
  searchParams: URLSearchParams,
  defaultLightest: string | null,
  defaultDarkest: string | null
): ParsedHue {
  if (!searchParams.has(key)) {
    console.log('no hue', key)
    return undefined
  }
  const input = searchParams.get(key)
  console.log(key, { input })

  let mid: string | undefined
  let midPoint: Hue['midPoint'] | undefined
  let lightest: string | undefined
  let darkest: string | undefined
  // format: color;midPoint;lightest:color;darkest:color
  const params = new Set(input.split(';'))
  if (params.size > 4) {
    throw new TypeError(
      `Invalid number of params for the ${key} hue, it should be 4 or less instead it's ${
        params.size
      }: ${JSON.stringify([...params])}`
    )
  }
  for (const param of params.values()) {
    const maybeMid = `#${param}`
    const maybeMidPoint = Number(param)

    switch (true) {
      case isColor(maybeMid) && !!mid:
        throw new TypeError(
          `Mid color (${mid}) already provided for the ${key} hue, please remove the additional one: ${param}`
        )
      case isColor(maybeMid) && !mid:
        mid = maybeMid
        break
      case !Number.isNaN(maybeMidPoint) && !midPoint:
        midPoint = assertValidMidPoint(maybeMidPoint)
        break
      case param.startsWith('lightest:') && !lightest:
        lightest = assertValidColor(`#${param.replace(/^lightest:/, '')}`)
        break
      case param.startsWith('darkest:') && !darkest:
        darkest = assertValidColor(`#${param.replace(/^darkest:/, '')}`)
        break
      default:
        // If the parser can't make sense of it we throw to surface that something is wrong with the input
        throw new TypeError(`Invalid param for the ${key} hue: ${param}`)
    }
  }

  return {
    mid,
    midPoint,
    lightest: lightest ?? defaultLightest,
    darkest: darkest ?? defaultDarkest,
  }
}

function assertValidColor(input: string) {
  if (isColor(input)) {
    return input
  }
  throw new TypeError(`Invalid color: ${input}`)
}
const isColor = (input: string) =>
  Boolean(input.match(/^#(?:[0-9a-f]{3}){1,2}$/i))

function assertValidMidPoint(input: number): Hue['midPoint'] {
  if (isMidPoint(input)) {
    return input
  }
  throw new TypeError(`Invalid midPoint: ${input}`)
}

const validMidPoints = new Set([
  50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950,
])
const isMidPoint = (input: number): input is Hue['midPoint'] =>
  validMidPoints.has(input)
