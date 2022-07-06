import { type NextRequest, NextResponse } from 'next/server'

// Takes care of redirecting /studio to /studio/en as Sanity Studio workspaces requires the same number of
// path segments in `basePath`. In other words, two workspaces with basePath `/en/studio` and '/no/studio' is allowed
// while `/studio` and '/no/studio' is not

const PUBLIC_FILE = /\.(.*)$/

export function middleware(request: NextRequest) {
  const shouldHandleLocale =
    !PUBLIC_FILE.test(request.nextUrl.pathname) &&
    !request.nextUrl.pathname.includes('/api/') &&
    request.nextUrl.pathname.includes('/studio/') &&
    request.nextUrl.locale === 'default'

  if (shouldHandleLocale) {
    const url = request.nextUrl.clone()
    url.pathname = `/en${request.nextUrl.pathname}`
    return NextResponse.redirect(url)
  }

  return undefined
}
