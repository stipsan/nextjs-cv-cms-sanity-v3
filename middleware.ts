import { acceptLanguage } from 'lib/server/accept-language'
import { type NextRequest, NextResponse } from 'next/server'

export const config = {
  // It's only necessary to do the accept-language redirect on the initial request
  matcher: '/',
}

// @TODO come back to this later and figure out how to make it work without causing an infinite redirect loop
/*
  const { pathname } = new URL(request.url)
  if (
    pathname.endsWith(request.nextUrl.pathname) &&
    !pathname.endsWith(`${request.nextUrl.locale}${request.nextUrl.pathname}`)
  ) {
    const url = request.nextUrl.clone()
    url.pathname = `/${request.nextUrl.locale}${request.nextUrl.pathname}`
    return NextResponse.redirect(url)
  }
  // */

export function middleware(request: NextRequest) {
  const locale = acceptLanguage(request.headers.get('accept-language'), [
    'en',
    'no',
  ])
  return NextResponse.redirect(new URL(`/${locale}`, request.url))
}
