import { headers } from 'next/headers'

export const absolute = (pathname: `/${string}`): URL => {
  // `VERCEL_URL` environment variable to get the deployment’s URL.
  // More info:
  // https://vercel.com/docs/concepts/projects/environment-variables
  const host = process.env.VERCEL_URL || headers().get('host')
  return new URL(
    pathname,
    host.includes(':') ? `http://${host}` : `https://${host}`
  )
}
