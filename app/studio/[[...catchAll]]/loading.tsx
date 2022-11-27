'use client'

/**
 * This route enables showing a loading state right away so that the user knows the studio is loading
 */

// Customize the Studio theme here: https://themer.sanity.build/?preset=verdant
import { theme } from 'https://themer.sanity.build/api/hues?preset=verdant'
import NextStudioLoading from 'next-sanity/studio/loading'

const config = { theme }
export default function Loading() {
  return <NextStudioLoading config={config} />
}
